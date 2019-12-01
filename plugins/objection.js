"use strict";

const fp = require("fastify-plugin");
const { User } = require('../models');

module.exports = fp(async function(fastify, opts) {
  fastify.register(require("fastify-objectionjs"), {
    knexConfig: {
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      }
    },
    models: [User]
  });
});
