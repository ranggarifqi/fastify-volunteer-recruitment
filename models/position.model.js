const { Model } = require("objection");

class Position extends Model {
  static get tableName() {
    return "positions";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["department_id", "name"],
      properties: {
        id: { type: "integer" },
        department_id: { type: "integer" },
        name: { type: "string" },
        description: { type: "string" },
        created_at: { type: "string" },
        updated_at: { type: "string" },
        deleted_at: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    const Department = require('./department.model');
    return {
      department: {
        relation: Model.BelongsToOneRelation,
        modelClass: Department,
        join: {
          from: 'positions.department_id',
          to: 'departments.id'
        }
      }
    }
  }
}

module.exports = Position;
