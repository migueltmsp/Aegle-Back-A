const router = require("express").Router()
const { Case } = require('../models');

class Retrieve{

    async testCase(){

        return Case.findAll();

}
}

let testController = new Retrieve();
module.exports = testController;