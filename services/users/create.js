"use strict";

module.exports = async function(fastify, opts) {
  const bodySchema = {
    type: "object",
    required: ["role_id", "email", "password", "full_name"],
    properties: {
      role_id: { type: "integer" },
      email: { type: "string" },
      password: { type: "string" },
      full_name: { type: "string" },
      mobile: { type: "string" },
      gender: { type: "string", maxLength: 1 }
    }
  };
  const schema = {
    body: bodySchema
  };

  fastify.post("/", { schema }, async (req, reply) => {
    const newUser = await fastify['user-create'](req.body);
    return newUser;
  });
};
