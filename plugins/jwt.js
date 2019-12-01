"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function(fastify, opts) {
  fastify.register(require('fastify-jwt'), {
    secret: process.env.JWT_SECRET
  });

  fastify.decorate("authenticate", async (req, reply) => {
    try {
      await req.jwtVerify();
    } catch (error) {
      reply.send(err);
    }
  });
});
