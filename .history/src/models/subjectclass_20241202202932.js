'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SubjectsClass extends Model {
    static associate(models){
      SubjectsClass.belongsTo(models.Subject, {
        foreignKey: 'subject_id'
      });

      SubjectsClass.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
    }
  }

  SubjectsClass.init({
    subject_id: {
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
    modelName: 'SubjectsClass',
    tableName: 'SubjectsClass',
    timestamps: false,
  });

  return SubjectsClass;
};
