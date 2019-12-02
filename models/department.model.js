const { Model } = require("objection");

class Department extends Model {
  static get tableName() {
    return "departments";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        description: { type: "string" },
        created_at: { type: "string" },
        updated_at: { type: "string" },
        deleted_at: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    const Position = require("./position.model");
    return {
      positions: {
        relation: Model.HasManyRelation,
        modelClass: Position,
        join: {
          from: "departments.id",
          to: "positions.department_id"
        }
      }
    };
  }
}

module.exports = Department;
