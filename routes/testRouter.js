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



router.get('/n1', async (req, res) => {
    try {
        res.json(await testController.testCase1());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});

router.post('/id', async (req, res)=> {             
    try {
        let id = req.body.id;

        console.log("Id is",req.body.id)
        res.json(await testController.testId(id));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

router.patch('/patchCase', async (req, res)=> {             
    try {
        let id = req.body.id;
        let doctorId = req.body.doctorId;

        console.log("Id is",req.body.id)
        console.log("doctorId is",req.body.doctorId)

        const caso = (await testController.patchCase(id, doctorId))
        console.log(caso.dataValues)

        caso.doctorId = doctorId;
        await caso.save();

        res.json(await testController.patchCase(id, doctorId));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;