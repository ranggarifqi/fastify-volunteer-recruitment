"use strict";

const fp = require("fastify-plugin");

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

// If you prefer async/await, use the following
//
module.exports = fp(async function(fastify, opts) {
  // fastify.register(require("fastify-objectionjs"), {
  //   knexConfig: {
  //     client: "mysql",
  //     connection: {
  //       host: process.env.DB_HOST,
  //       user: process.env.DB_USER,
  //       password: process.env.DB_PASSWORD,
  //       database: process.env.DB_NAME
  //     }
  //   },
  //   models: []
  // });
});
