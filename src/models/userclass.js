"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class UserClasses extends Model {
    static associate(models) {
      UserClasses.belongsTo(models.Users, {
        foreignKey: "user_id",
      });

      UserClasses.belongsTo(models.Classes, {
        foreignKey: "class_id",
      });
    }
  }

  UserClasses.init(
    {
      user_id: {
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
      modelName: "UserClasses",
      tableName: "UserClasses",
      timestamps: false,
    }
  );

  return UserClasses;
};