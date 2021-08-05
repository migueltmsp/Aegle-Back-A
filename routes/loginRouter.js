const router = require("express").Router();
const loginController = require("../controllers/loginController.js");


router.post('/searchEmail', async (req, res)=> {             
    try {
        let email = req.body.email;
        let password = req.body.password;
        let codigoEmail = req.body.codigoEmail;
        console.log("password es", password)
        console.log("codigoEmail es", codigoEmail)
        res.json(await loginController.loginTest(email, password, codigoEmail));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.post('/sendPassCode', async (req, res)=> {             
    try {
        let email = req.body.email;
        let password = req.body.password;
        let codigoEmail = req.body.codigoEmail;
       

        let answer = (await loginController.passCode(email, password, codigoEmail))
        console.log("Datavalues es",answer[0].dataValues)


        let tokenFake = (answer[0].password).concat(answer[0].codigoEmail)
        res.json(tokenFake)
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;