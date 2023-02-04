'use strict'

const Signup = require('../models/signupModel');
const mongoose = require('mongoose');

//get all signup users
const getSignups = async (req, res) => {
    const signups = await Signup.find({}).sort({createdAt: -1});

     res.status(200).json(signups)
}


const deleteALLSignups = async (req, res) => {


    const signup = await Signup.deleteMany({})
    //returns document that is deleted

    if(!signup){
        return res.status(404).json({error: 'Unable to delete contents of Signup collection'});
    }

    res.status(200).json(signup);
    
}

//get a single user
const getSignup = async( req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){  
        //checks if Id is valids
        return res.status(404).json({error: 'No such signup'});
    }

    const signup = await Signup.findById(id)

    if(!signup){
        return res.status(404).json({error: 'No such signup'});
    }

    res.status(200).json(login)
}


//create new user
const createSignup = async (req, res) => {

    const {fullName, email, password, UType} = req.body
    //add doc to db
    try {
        const signup = await Signup.create({fullName, email, password, UType});
        res.status(200).json(signup)
      } catch (error) {
        res.status(400).json({error: error.message})
      }

}

// ---------------------------- extra routes


//delete a user
const deleteSignup = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({eroor: 'No such signup'})
    }

    const signup = await Signup.findOneAndDelete({_id: id})
    //returns document that is deleted

    if(!signup){
        return res.status(404).json({error: 'No such signup'});
    }

    res.status(200).json(signup);
    
}

//update a user

const updateSignup = ( async ( req, res) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({eroor: 'No such signup'})
    }

    const signup = await Signup.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    //returns document that is deleted

    if(!signup){
        return res.status(404).json({error: 'No such signup'});
    }

    res.status(200).json(signup);
})

// ---------------------------- extra routes
module.exports = {
    getSignups,
    deleteALLSignups,
    getSignup,
    createSignup,
    deleteSignup,
    updateSignup

}