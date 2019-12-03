const { Model } = require("objection");

class RecruitmentPosition extends Model {
  static get tableName() {
    return "recruitments_positions";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["recruitment_id", "position_id", "department_id"],
      properties: {
        id: { type: "integer" },
        recruitment_id: { type: "integer" },
        position_id: { type: "integer" },
        department_id: { type: "integer" },
        created_at: { type: "string" }
      }
    };
  }
}

module.exports = RecruitmentPosition;
