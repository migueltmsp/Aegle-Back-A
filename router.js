const router = require('express').Router();
const testRouter = require('./routes/testRouter.js');
const loginRouter = require('./routes/loginRouter.js');



router.use('/test', testRouter);
router.use('/login', loginRouter);



module.exports = router;
