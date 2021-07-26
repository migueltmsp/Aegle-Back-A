const router = require("express").Router();
const testController = require("../controllers/testController.js");
const bodyParser = require('body-parser');



//GET - ID ORDER - NO ADMIN
router.get('/', async (req, res) => {
    try {
        res.json(await testController.testCase());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});

router.get('/n3', async (req, res) => {
    try {
        res.json(await testController.testCase3());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});
router.post('/id', async (req, res)=> {             
    try {
        let id = req.body.id;

        console.log("Data card?",req.body.id)
        res.json(await testController.testId(id));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;