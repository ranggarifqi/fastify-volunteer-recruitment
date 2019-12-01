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

  static get relationMappings() {
    const Role = require('./role.model');
    const UserProfile = require('./userProfile.model');
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'users.role_id',
          to: 'roles.id'
        }
      },
      profile: {
        relation: Model.HasOneRelation,
        modelClass: UserProfile,
        join: {
          from: 'users.id',
          to: 'user_profiles.user_id'
        }
      }
    };
  }
}

module.exports = User;
