const router = require("express").Router()
const { Doctor, Case, Citizen } = require('../models');

class Retrieve{

    async allCases(){
        return Case.findAll();
    }
    
    async autocomplete(dni){
        return Citizen.findAll({
            where: {DNI: dni}
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

let workspaceController = new Retrieve();
module.exports = workspaceController;