const router = require("express").Router()
const { Doctor } = require('../models');

class DoctorData {

    async test(){
        return Doctor.findAll();
    }

    async loginTest(email, password, codigoEmail){
        return Doctor.findAll({
            where: {
                email: email,
                password: password
            }
        }
        );
    }

    async passCode(email,productoEscalar){
        return Doctor.findAll({
            where: {
                email: email,
                productoEscalar: productoEscalar
            }
        }
        
        );
        
    }

    async completeLogin(superToken){
        
        return Doctor.findOne({
            where: {
                superToken: superToken
            }
        }
        
        );
        
    }



}

let loginController = new DoctorData();
module.exports = loginController;