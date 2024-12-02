'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Subjectclasses', {
      subject_id: {
        type: Sequelize.UUID,
        references: {
          model: "subject",
          key: "subject_id",
        },
      },
      class_id: {
        type: Sequelize.UUID,
        references: {
          model: "class",
          key: "class_id",
        },
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Subjectclasses');
  }
};
