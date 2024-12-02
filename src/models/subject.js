"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Subjects extends Model {
    static associate(models) {
      if (models.Scores && models.Scores.prototype instanceof Model) {
        Subjects.hasMany(models.Scores, {
          foreignKey: "subject_id",
        });
      } else {
        console.error("models.Score is not a valid Sequelize model");
      }

      if (
        models.SubjectClasses &&
        models.SubjectClasses.prototype instanceof Model
      ) {
        Subjects.hasMany(models.SubjectClasses, {
          foreignKey: "subject_id",
        });
      } else {
        console.error("models.SubjectClasses is not a valid Sequelize model");
      }
    }
  }

  Subjects.init(
    {
      subject_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Subjects",
      tableName: "Subjects",
      timestamps: false,
    }
  );

  return Subjects;
};