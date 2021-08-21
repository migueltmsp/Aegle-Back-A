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
        let answer = await testController.testId(id);
        console.log(answer[0].dataValues)
        answer[0].dataValues.estado = JSON.parse(answer[0].dataValues.estado)

        res.json(answer[0].dataValues)
        res.sendStatus(200)
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
        let estado = req.body.estado;

        console.log("Id is",req.body.id)
        console.log("doctorId is",req.body.doctorId)

        const caso = (await testController.patchCase(id, doctorId))
        console.log(caso.dataValues)

        caso.doctorId = doctorId;
        caso.estado = estado;
        await caso.save();

        res.json(await testController.patchCase(id, doctorId));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


router.patch('/testReceive', async (req, res)=> {             
    try {

        let estado = req.body;
        let id = 1
        console.log(estado)

        const caso = (await testController.patchCase(id, estado))
        /* console.log(caso.dataValues) */

        caso.estado = JSON.stringify(estado);
        console.log(caso.estado)
        
        await caso.save();

        res.json(await testController.patchCase(id));
       
       
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;