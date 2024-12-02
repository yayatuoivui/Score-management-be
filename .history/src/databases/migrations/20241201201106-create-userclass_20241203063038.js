'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Userclasses', {
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
      class_id: {
        type: Sequelize.UUID,
        references: {
          model: "Classes",
          key: "class_id",
        },
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Userclasses');
  }
};
