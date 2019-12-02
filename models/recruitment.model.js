"use strict";

const { Model } = require("objection");

class Recruitment extends Model {
  static get tableName() {
    return "recruitments";
  }

  static get jsonSchema() {
    return {
      // type: "object",
      // required: ["name"],
      // properties: {
      //   id: { type: "integer" },
      //   name: { type: "string" },
      //   description: { type: "string" },
      //   created_at: { type: "string" }
      // }
    };
  }

  // static get relationMappings() {}
}

module.exports = Recruitment;
