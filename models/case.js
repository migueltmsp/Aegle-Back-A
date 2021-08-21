'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Case.belongsTo(models.Citizen, {
        foreignKey: 'citizenId'
      });
      Case.belongsTo(models.Doctor, {
        foreignKey: 'doctorId'
      });
      Case.belongsTo(models.Assistant, {
        foreignKey: 'assistantId'
      });
      Case.belongsTo(models.Hospital, {
        foreignKey: 'hospitalId'
      });
    }
    
  };
  Case.init({
    datosActuacion: DataTypes.STRING,
    datosPersonales: DataTypes.STRING,
    valoracion: DataTypes.STRING,
    diagTrat: DataTypes.STRING,
    manejoResolucion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Case',
  });
  return Case;
};