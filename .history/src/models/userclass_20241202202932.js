'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class UserClass extends Model {
    static associate(models){
        UserClass.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

        UserClass.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
    }
  }

  UserClass.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserClass',
    tableName: 'UserClass',
    timestamps: false,
  });

  return UserClass;
};
