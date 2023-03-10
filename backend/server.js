//require express
const express = require("express");
const mongoose = require("mongoose");
//import body parser
const bodyParser = require('body-parser');
//import cors
const cors = require('cors');
//invoke express
const app = express();

//import route
const postRoutes = require('./routes/posts');
//app middleware
app.use(bodyParser.json());
app.use(cors());



app.use(postRoutes);

//app.use('/',TodoItemRoute);




//declare a port
const PORT= 8000; 

//listen the application
app.listen(PORT,()=>{
    console.log('Server is up and running on port number :',PORT)
})


//create db connection

const DB_URL = 'mongodb+srv://kavindi:kavi123@mernapp.1iygwv5.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Mongodb connection success!");
}).catch((err)=>  console.log("unsuccess!",err));

////////////////////////////////////////////////////////////////////////////////////////////////////

