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

  static get relationMappings() {
    const User = require("./user.model");
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "roles.id",
          to: "users.role_id"
        }
      }
    };
  }
}

module.exports = Role;
