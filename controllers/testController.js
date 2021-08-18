const router = require("express").Router()
const { Doctor, Case } = require('../models');

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

    async patchCase(id){
        
        return await Case.findOne({
            where: {id: id}
        });

        
    }



}

let testController = new Retrieve();
module.exports = testController;