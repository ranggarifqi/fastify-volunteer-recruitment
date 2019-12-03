"use strict";

const { Model } = require("objection");

class Recruitment extends Model {
  static get tableName() {
    return "recruitments";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "title",
        "sub_title",
        "description",
        "submit_description",
        "start_date",
        "end_date"
      ],
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        sub_title: { type: "string" },
        description: { type: "string" },
        submit_description: { type: "string" },
        created_at: { type: "string" },
        start_date: { type: "string" },
        end_date: { type: "string" },
        is_active: { type: "boolean" }
      }
    };
  }

  // static get relationMappings() {}
}

module.exports = Recruitment;
