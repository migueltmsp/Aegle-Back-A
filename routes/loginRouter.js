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
        let productoEscalar = req.body.productoEscalar;
       
        let answer = (await loginController.passCode(email,productoEscalar))

        res.json(answer[0].secretUser);
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.post('/completeLogin', async (req, res)=> {             
    try {
        /* let secretUser = req.body.secretUser; */
        let superToken = req.body.superToken;
       
        let answer = (await loginController.completeLogin(superToken))


        
        res.status(200).json(answer);
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;