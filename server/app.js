
// require('./models/db'); // database
// require('./config/passportConfig'); // for password verification


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Route = require('./routes/index.router');
const swaggerSetup = require('./Swagger/swagger');


var app = express();     

require("./connection/DB")
require('dotenv').config()
swaggerSetup(app);
//------- configure middleware----------
app.use(bodyParser.json()); 
app.use(cors()); 

app.use('/api', Route);
app.use('/api/department' ,require("./routes/Department.router"))



//-----starting the server--------
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));