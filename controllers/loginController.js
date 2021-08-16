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

    async completeLogin(secretUser, superToken){
        return Doctor.findAll({
            where: {
                secretUser: secretUser,
                superToken: superToken
            }
        }
        
        );
        
    }



}

let loginController = new DoctorData();
module.exports = loginController;