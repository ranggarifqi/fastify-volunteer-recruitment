"use strict";

const { Model } = require("objection");

class Volunteer extends Model {
  static get tableName() {
    return "volunteers";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        id: { type: "integer" },
        recruitment_id: { type: "integer" },
        position_id: { type: "integer" },
        is_accepted: { type: "boolean" },
        processed_at: { type: "string" },
        created_at: { type: "string" },
        deleted_at: { type: "string" },
        full_name: { type: "string" },
        province_id: { type: "integer" },
        city_id: { type: "integer" },
        last_education: { type: "string" },
        gender: { type: "string" },
        wa: { type: "string" },
        email: { type: "string" },
        cv_file_name: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    const Province = require("./province.model");
    const City = require("./city.model");
    const Recruitment = require("./recruitment.model");
    const Position = require("./position.model");

    return {
      province: {
        relation: Model.BelongsToOneRelation,
        modelClass: Province,
        join: {
          from: "volunteers.province_id",
          to: "provinces.id"
        }
      },
      city: {
        relation: Model.BelongsToOneRelation,
        modelClass: City,
        join: {
          from: "volunteers.city_id",
          to: "cities.id"
        }
      },
      recruitment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Recruitment,
        join: {
          from: "volunteers.recruitment_id",
          to: "recruitments.id"
        }
      },
      position: {
        relation: Model.BelongsToOneRelation,
        modelClass: Position,
        join: {
          from: "volunteers.position_id",
          to: "positions.id"
        }
      },
    };
  }
}

module.exports = Volunteer;
