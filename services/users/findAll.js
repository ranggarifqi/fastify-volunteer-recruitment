"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/", { preValidation: [fastify.authenticate] },async function(req, reply) {
    const users = await fastify["user-find"]();
    return users;
  });
};
