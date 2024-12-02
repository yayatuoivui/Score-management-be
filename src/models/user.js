'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models){
      User.belongsTo(models.Role, {
        foreignKey: 'role_id'
      });

      User.hasMany(models.Score, {
        foreignKey: "user_id"
      });

      User.hasMany(models.UserClass, {
        foreignKey: "user_id"
      })
    }
  }

  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false,
  });

  return User;
};
