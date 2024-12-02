'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SubjectClass extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  
  SubjectClass.init({
    // Define your columns here, for example:
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // Add other fields as needed
  }, {
    sequelize,
    modelName: 'SubjectClass',
  });
  
  return SubjectClass;
};
