'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('SubjectClasses', {
      subject_id: {
        type: Sequelize.UUID,
        references: {
          model: "Subjects",
          key: "subject_id",
        },
      },
      class_id: {
        type: Sequelize.UUID,
        references: {
          model: "Classes",
          key: "class_id",
        },
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('SubjectClasses');
  }
};
