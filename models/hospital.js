'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hospital.init({
    nombre: DataTypes.STRING,
    numeroEmpleado: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    codigoEmail: DataTypes.STRING,
    productoEscalar: DataTypes.INTEGER,
    secretUser: DataTypes.STRING,
    numberBase: DataTypes.INTEGER,
    superToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};