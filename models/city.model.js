"use strict";

const { Model } = require("objection");

class City extends Model {
  static get tableName() {
    return "cities";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        province_id: { type: "integer" },
        name: { type: "string" },
        status: { type: "boolean" }
      }
    };
  }
}

module.exports = City;
