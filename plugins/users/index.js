"use strict";

const fp = require("fastify-plugin");
const bcrypt = require("bcryptjs");
const { transaction } = require("objection");
const Boom = require("boom");

const salt = bcrypt.genSaltSync(10);

module.exports = fp(async function(fastify, opts) {
  fastify.decorate("user-find", async function() {
    const { user } = fastify.objection.models;
    const u = await user.query().orderBy("created_at", "desc");
    return u;
  });

  fastify.decorate("user-create", async function({
    role_id,
    email,
    password,
    ...userProfilePayload
  }) {
    const { user, userProfile } = fastify.objection.models;
    try {
      const res = await transaction(
        user,
        userProfile,
        async (user, userProfile) => {
          // Insert User
          const userPayload = {
            role_id,
            email,
            password: bcrypt.hashSync(password, salt)
          };
          const newUser = await user.query().insertAndFetch(userPayload);

          // Insert User Profile
          userProfilePayload.user_id = newUser.id;
          const newProfile = await userProfile
            .query()
            .insertAndFetch(userProfilePayload);

          return { ...newUser, profile: newProfile };
        }
      );
      return res;
    } catch (error) {
      throw error;
    }
  });

  fastify.decorate("user-login", async ({ email, password }) => {
    const { user } = fastify.objection.models;
    const u = await user
      .query()
      .where("email", email)
      .first()
      .eager("[role, profile]");
    if (!u) {
      throw Boom.unauthorized("Mohon cek email dan password anda");
    }
    if (!bcrypt.compareSync(password, u.password)) {
      throw Boom.unauthorized("Mohon cek email dan password anda");
    }

    const payload = {
      email: u.email,
      full_name: u.profile.full_name,
      role: u.role.name
    };

    const res = {
      userId: u.id,
      token: 'Bearer ' + fastify.jwt.sign({ payload })
    }

    return res;
  });
});
