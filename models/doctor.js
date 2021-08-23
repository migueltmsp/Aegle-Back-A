'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor.init({
    nombre: DataTypes.STRING,
    numeroColegiado: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    codigoEmail: DataTypes.STRING,
    productoEscalar: DataTypes.INTEGER,
    secretUser: DataTypes.STRING,
    numberBase: DataTypes.INTEGER,
    superToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};