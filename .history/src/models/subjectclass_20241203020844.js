'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SubjectClass extends Model {
    static associate(models) {
      SubjectClass.belongsTo(models.Subject, {
        foreignKey: 'user_id'
      });

      SubjectClass.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
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
