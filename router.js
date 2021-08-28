const router = require('express').Router();
const workspaceRouter = require('./routes/workspaceRouter.js');
const loginRouter = require('./routes/loginRouter.js');



router.use('/workspace', workspaceRouter);
router.use('/login', loginRouter);



module.exports = router;
