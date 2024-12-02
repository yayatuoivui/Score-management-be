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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  }, {
    sequelize,
    modelName: 'Score',
    tableName: 'Scores',
    timestamps: false,
  });

  return Score;
};
