const router = require("express").Router();
const workspaceController = require("../controllers/workspaceController.js");



//GET - ID ORDER - NO ADMIN
router.get('/', async (req, res) => {
    try {
        res.json(await workspaceController.allCases());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});



router.get('/n1', async (req, res) => {
    try {
        res.json(await workspaceController.testCase1());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});

router.post('/id', async (req, res)=> {             
    try {
        let id = req.body.id;

        let answer = await workspaceController.testId(id);
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

router.post('/autocomplete', async (req, res)=> {             
    try {
        let dni = req.body.dni;

        let answer = await workspaceController.autocomplete(dni);

        res.json(answer[0].dataValues)
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

        const caso = (await workspaceController.patchCase(id, doctorId))

        caso.doctorId = doctorId;
        caso.estado = estado; 
        await caso.save();

        res.json(await workspaceController.patchCase(id, doctorId));
       
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


router.patch('/testReceive', async (req, res)=> {             
    try {

        let informacion = req.body;
        let id = 1

        const caso = (await workspaceController.patchCase(id))

        caso.datosActuacion = JSON.stringify(informacion.datosActuacion);
        caso.datosPersonales = JSON.stringify(informacion.datosPersonales);
        caso.valoracion = JSON.stringify(informacion.valoracion);
        caso.diagTrat = JSON.stringify(informacion.diagTrat);
        caso.manejoResolucion = JSON.stringify(informacion.manejoResolucion);

        
        await caso.save();

        res.json(await workspaceController.patchCase(id));
       
       
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;