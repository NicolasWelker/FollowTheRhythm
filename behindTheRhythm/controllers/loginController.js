'use strict'

const Login = require('../models/loginModel');
const mongoose = require('mongoose');

//get all workouts
const getLogins = async (req, res) => {
    const logins = await Login.find({}).sort({createdAt: -1});

    res.status(200).json(logins)
}


//get a single login
const getLogin = async( req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        //checks if Id is valid
        return res.status(404).json({error: 'No such workout'});
    }

    const login = await Login.findById(id)

    if(!login){
        return res.status(404).json({error: 'No such login'});
    }

    res.status(200).json(login)
}


//create new login
const createLogin = async (req, res) => {

    const {fullName, email, password, UType} = req.body
    //add doc to db
    try {
        const login = await Login.create({fullName, email, password, UType});
        res.status(200).json(login)
      } catch (error) {
        res.status(400).json({error: error.message})
      }

}

//delete a login
const deleteLogin = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({eroor: 'No such login'})
    }

    const login = await Login.findOneAndDelete({_id: id})
    //returns document that is deleted

    if(!login){
        return res.status(404).json({error: 'No such login'});
    }

    res.status(200).json(login);
    
}

//update a login

const updateLogin = ( async ( req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({eroor: 'No such login'})
    }

    const login = await Login.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    //returns document that is deleted

    if(!login){
        return res.status(404).json({error: 'No such login'});
    }

    res.status(200).json(login);
})


module.exports = {
    getLogins,
    getLogin,
    createLogin,
    deleteLogin,
    updateLogin

}