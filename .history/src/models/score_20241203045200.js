'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Score extends Model {
    static associate(models){
      Score.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Score.belongsTo(models.Subject, {
        foreignKey: 'subject_id'
      });
    }
  }

  Score.init({
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    subject_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    process: {
      type: DataTypes.DECIMAL,
    },
    midterm: {
      type: DataTypes.DECIMAL,
    },
    final: {
      type: DataTypes.DECIMAL,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },   {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    tableName: 'score',
    id: false  // This explicitly tells Sequelize not to add an id field
  });

  return Score;
};
