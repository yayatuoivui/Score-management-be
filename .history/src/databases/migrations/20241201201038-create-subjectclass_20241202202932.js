'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subjectclass', {
      subject_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "subject",
          key: "subject_id",
        },
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "class",
          key: "class_id",
        },
      }
    })
    
  },

  async down (queryInterface, Sequelize) {

  }
};
