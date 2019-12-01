"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/users", async function(req, reply) {
    fastify["user-create"]();
    const users = await fastify["user-find"]();
    return users;
  });
};
