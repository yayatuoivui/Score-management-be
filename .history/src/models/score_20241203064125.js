"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Scores extends Model {
    static associate(models) {
      Scores.belongsTo(models.Users, {
        foreignKey: "user_id",
      });

      Scores.belongsTo(models.Subjects, {
        foreignKey: "subject_id",
      });
    }
  }

  Scores.init(
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      subject_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      process: {
        type: DataTypes.DECIMAL,
      },
      midterm: {
        type: DataTypes.DECIMAL,
      },
      final: {
        type: DataTypes.DECIMAL,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Scores",
      tableName: "Scores",
      timestamps: false,
    }
  );

  return Scores;
};