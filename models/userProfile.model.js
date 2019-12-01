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
}

module.exports = UserProfile;
