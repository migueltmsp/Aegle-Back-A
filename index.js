const express = require('express');
const app = express();
const port = 6000;
const router = require('./router');
const db = require('./db.js');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Middleware
app.use(cors());
app.use(express.json()); 
app.use(router);


 
//Connecting to the database
db.then(()=>{
    //Starting server
    
        app.listen(process.env.PORT || port, ()=> console.log(`Server (Node) running on http://localhost:${port}`));
    })
    .catch((err)=> console.log(err.message));