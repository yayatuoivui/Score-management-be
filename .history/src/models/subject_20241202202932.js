'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Subject extends Model {
    static associate(models){
      Subject.hasMany(models.Score, {
        foreignKey: 'subject_id'
      });

      Subject.hasMany(models.SubjectClass, {
        foreignKey: 'subject_id'
      });

    }
  }

  Subject.init({
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Subject',
    tableName: 'Subjects',
    timestamps: false,
  });

  return Subject;
};
