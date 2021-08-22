'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Citizen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Citizen.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    tarjetaSIP: DataTypes.STRING,
    DNI: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    telefonoPersonal: DataTypes.INTEGER,
    telefonoContactar: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Citizen',
  });
  return Citizen;
};