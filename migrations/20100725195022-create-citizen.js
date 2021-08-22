'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Citizens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.STRING
      },
      tarjetaSIP: {
        type: Sequelize.STRING
      },
      DNI: {
        type: Sequelize.STRING
      },
      domicilio: {
        type: Sequelize.STRING
      },
      telefonoPersonal: {
        type: Sequelize.INTEGER
      },
      telefonoContactar: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Citizens');
  }
};