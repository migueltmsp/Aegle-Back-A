const router = require("express").Router()
const { Doctor } = require('../models');

class DoctorData {

    async test(){
        return Doctor.findAll();
    }

    async loginTest(email){
        return Doctor.findAll({
            where: {email: email}
        });
    }



}

let loginController = new DoctorData();
module.exports = loginController;