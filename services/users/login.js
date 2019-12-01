"use strict";

module.exports = async function(fastify, opts) {
  const bodySchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string" },
      password: { type: "string" }
    }
  };

  const schema = {
    body: bodySchema
  };

  fastify.post("/login", { schema }, async (req, reply) => {
    const res = await fastify['user-login'](req.body);
    return res;
  });
};
