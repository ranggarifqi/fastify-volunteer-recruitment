"use strict";

const { Model } = require("objection");

class Province extends Model {
  static get tableName() {
    return "provinces";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        status: { type: "boolean" }
      }
    };
  }
}

module.exports = Province;
