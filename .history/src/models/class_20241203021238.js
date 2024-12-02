'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    class_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Class.associate = function(models) {
    Class.hasMany(models.Student, {
      foreignKey: 'classId',
      as: 'students'
    });
  };

  return Class;
};
