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

        let answer = await workspaceController.historyById(id);

        const structuredAnswer = answer.map((element,index) =>{

            return(element[index] = (answer[index].dataValues)) 
            
        });

        res.json(structuredAnswer)
        
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

router.post('/createCase', async (req, res)=> {             
    try {
       
        res.json((await workspaceController.createCase()));
   
    
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


router.patch('/patchCase', async (req, res)=> {             
    try {

        let informacion = req.body;
        console.log("Info", informacion)
        let id = req.body.id;

        const caso = (await workspaceController.patchCase(id))
        console.log(caso)

        caso.citizenId = JSON.stringify(informacion.citizenId);
        caso.doctorId = JSON.stringify(informacion.doctorId);
        caso.hospitalId = JSON.stringify(informacion.hospitalId);
        caso.assistantId = JSON.stringify(informacion.assistantId);

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