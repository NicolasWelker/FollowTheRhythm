'use strict'

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const protoRoutes = require('./routes/protoRoutes');
//express app

const app = express();

//middleware
app.use(express.json()); //allows for req.body

app.use((req, res, next) => { //global middleware
    console.log(req.path, req.method);
    next(); //this is just to log all requests

})

// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'});


// });

app.use('/api/protoRoutes', protoRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        //listen to port
        app.listen(process.env.PORT, () => {
            console.log('listeniing for requests on port', process.env.PORT)
        });
    })
    .catch((error) =>{
        console.log(error);
    });
        
    