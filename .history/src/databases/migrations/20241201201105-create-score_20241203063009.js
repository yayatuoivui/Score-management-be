'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
      subject_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Subjects",
          key: "subject_id",
        },
      },
      process: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      midterm: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      final: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores');
  }
};
