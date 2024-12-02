'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Subject extends Model {
    static associate(models){
      if (models.Score && models.Score.prototype instanceof Model) {
        Subject.hasMany(models.Score, {
          foreignKey: 'subject_id'
        });
      } else {
        console.error("models.Score is not a valid Sequelize model");
      }

      if (models.SubjectClass && models.SubjectClass.prototype instanceof Model) {
        Subject.hasMany(models.SubjectClass, {
          foreignKey: 'subject_id'
        });
      } else {
        console.error("models.SubjectClass is not a valid Sequelize model");
      }
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
