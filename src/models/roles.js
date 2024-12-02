'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Role extends Model {
    static associate(models){
      Role.hasMany(models.User, {
        foreignKey: 'role_id'
      })
    }
  }

  Role.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'Roles',
    timestamps: false,
  });
  return Role;
};
