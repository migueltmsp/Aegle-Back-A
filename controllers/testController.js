const router = require("express").Router()
const { Doctor } = require('../models');

class Retrieve{

    async testCase(){
        return Case.findAll();
    }

    async testCase1(){
        return Doctor.findAll({
            where: {id: 1}
        });
    }
    async testId(id){
        return Case.findAll({
            where: {doctorId: id}
        });
    }



}

let testController = new Retrieve();
module.exports = testController;