"use strict";

const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return Base.generateJsonSchema({
      type: "object",
      required: ["username", "password"],
      properties: {
        id: { type: "integer" },
        username: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        salt: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string" },
        updated_at: { type: "string" }
      }
    });
  }
}

module.exports = User;
