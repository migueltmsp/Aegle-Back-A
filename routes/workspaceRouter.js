const router = require("express").Router();
const workspaceController = require("../controllers/workspaceController.js");



router.get('/admin/cases/', async (req, res) => {
    try {
        res.json(await workspaceController.allCases());

   }catch (err) {
       return res.status(500).json({
           message: err.message
       });
   }
});


router.post('/history', async (req, res)=> {             
    try {

        let id = req.body.id;

        let answer = await workspaceController.testId(id);
        /* console.log(answer[0].dataValues) */

        const structuredAnswer = answer.map((element,index) =>{
            return element[index] = answer[index].dataValues;
           /*  console.log("elemento",element[index]) */
        });

        console.log("out",structuredAnswer)

        answer[0].dataValues.estado = JSON.parse(answer[0].dataValues.estado)

        res.json(answer[0].dataValues)
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