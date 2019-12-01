"use strict";

const prefix = "/users";

module.exports = async function(fastify, opts) {
  fastify.register(require("./findAll"), { prefix });
  fastify.register(require("./create"), { prefix });
  fastify.register(require("./login"), { prefix });
};
