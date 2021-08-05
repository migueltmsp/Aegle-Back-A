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

    async passCode(email, password, codigoEmail){
        return Doctor.findAll({
            where: {
                email: email,
                password: password,
                codigoEmail: codigoEmail
            }
        }
        
        );
        
    }



}

let loginController = new DoctorData();
module.exports = loginController;