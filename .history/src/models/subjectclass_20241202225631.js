'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class SubjectClass extends Model {
    static associate(models){
      SubjectClass.belongsTo(models.Subject, {
        foreignKey: 'subject_id'
      });

      SubjectClass.belongsTo(models.Class, {
        foreignKey: 'class_id'
      });
    }
  }

  SubjectClass.init({
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

  return SubjectClass;
};
