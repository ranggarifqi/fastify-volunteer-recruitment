"use strict";

const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["role_id", "email", "password"],
      properties: {
        id: { type: "integer" },
        role_id: { type: "integer" },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string" }
      }
    };
  }
}

module.exports = User;
