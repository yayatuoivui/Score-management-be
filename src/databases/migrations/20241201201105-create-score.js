'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('score', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "subject",
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

  }
};
