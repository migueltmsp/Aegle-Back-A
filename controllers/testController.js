const router = require("express").Router()
const { Case } = require('../models');

class Retrieve{

    async testCase(){
        return Case.findAll();
    }

    async testCase3(){
        return Case.findAll({
            where: {doctorId: 3}
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