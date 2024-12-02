'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      role_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
          allowNull: false,
          type: Sequelize.STRING
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
  
  }
};
