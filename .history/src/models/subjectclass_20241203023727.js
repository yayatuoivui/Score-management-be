'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SubjectClass extends Model {
    static associate(models) {
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
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'SubjectClass',
    tableName: 'SubjectClass',
    timestamps: false,
  });
  
  return SubjectClass;
};
