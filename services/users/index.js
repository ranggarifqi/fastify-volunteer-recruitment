"use strict";

module.exports = async function(fastify, opts) {
  fastify.register(require('./findAll'), { prefix: "/users" });
  fastify.register(require("./create"), { prefix: "/users" });
};
