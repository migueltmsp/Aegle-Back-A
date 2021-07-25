const router = require("express").Router();
const testController = require("../controllers/testController.js");


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


module.exports = router;