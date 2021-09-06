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


    async createCase(){
        let newcase = await Case.create();
        return newcase
      
    }

    async patchCase(id){
        
        return await Case.findOne({
            where: {id: id}
        });
      
    }





}

let workspaceController = new Retrieve();
module.exports = workspaceController;