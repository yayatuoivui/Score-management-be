"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Classes extends Model {
    static associate(models) {
      if (models.SubjectClasses && models.UserClasses) {
        Classes.hasMany(models.SubjectClasses, {
          foreignKey: "class_id",
        });

        Classes.hasMany(models.UserClasses, {
          foreignKey: "class_id",
        });
      } else {
        console.error("Missing required models:", {
          hasSubjectClass: !!models.SubjectClasses,
          hasUserClass: !!models.UserClasses,
        });
      }
    }
  }

  Classes.init(
    {
      class_id: {
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
      modelName: "Classes",
      tableName: "Classes",
      timestamps: false,
    }
  );

  return Classes;
};