"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubjectClasses extends Model {
    static associate(models) {
      SubjectClasses.belongsTo(models.Subjects, {
        foreignKey: "subject_id",
      });

      SubjectClasses.belongsTo(models.Classes, {
        foreignKey: "class_id",
      });
    }
  }

  SubjectClasses.init(
    {
      subject_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      class_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SubjectClasses",
      tableName: "SubjectClasses",
      timestamps: false,
    }
  );

  return SubjectClasses;
};