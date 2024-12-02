'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('classes', {
      class_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name:{
          allowNull: false,
          type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('classes');
  }
};
