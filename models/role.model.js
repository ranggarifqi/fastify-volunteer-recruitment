"use strict";

const { Model } = require("objection");

class Role extends Model {
  static get tableName() {
    return "roles";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        description: { type: "string" },
        created_at: { type: "string" }
      }
    };
  }
}

module.exports = Role;
