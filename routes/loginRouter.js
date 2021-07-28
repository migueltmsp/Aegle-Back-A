const router = require("express").Router();
const loginController = require("../controllers/loginController.js");


router.post('/searchEmail', async (req, res)=> {             
    try {
        let email = req.body.email;

        console.log("email is",req.body.email)
        res.json(await loginController.loginTest(email));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;