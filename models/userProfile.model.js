"use strict";

const { Model } = require("objection");

class UserProfile extends Model {
  static get tableName() {
    return "user_profiles";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "full_name"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        full_name: { type: "string" },
        mobile: { type: "string" },
        gender: { type: "string" },
        created_at: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    const User = require("./user.model");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_profiles.user_id",
          to: "users.id"
        }
      }
    };
  }
}

module.exports = UserProfile;
