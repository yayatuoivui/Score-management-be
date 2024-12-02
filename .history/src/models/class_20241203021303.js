'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Class extends Model {
    static associate(models){
      Class.hasMany(models.SubjectClass, {
        foreignKey: 'class_id'
      });

      Class.hasMany(models.UserClass, {
        foreignKey: 'class_id'
      });

    }
  }

  Class.init({
    class_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'Class',
    timestamps: false,
  });

  return Class;
};