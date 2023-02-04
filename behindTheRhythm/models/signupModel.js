'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema;

const signupSchema = new Schema({

    fullName:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true
    },
    UType:{
        type: String,
        required: true
    }
}, {timestamps: true});


// static signup method
signupSchema.statics.signup = async function (fullName, email, password, UType) {

    //validation
    if(!email || !password || !fullName || !UType){
        throw Error(`All fields must be filled ${fullName}___${email}___${password}___${UType}`)
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if(exists){
        throw Error('Email already in use')
    }

    // mypassword -> mypasswordsdjfpasfjpsda
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log("hash: ", hash )

    const user = await this.create({fullName, email, password: hash, UType})


    return user
}

//static login method
signupSchema.statics.login = async function (email, password){
    //validation
    if(!email || !password ){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })  //see if user exists based on email

    if(!user){
        throw Error('Incorrect email')
    }
    //                        //       plaintext    encrypted
    const match = await bcrypt.compare(password, user.password)

    // console.log(password, user.password)
    if(!match){
        throw Error('Incorrect password')
    }

    return user  //if email and encrypted pass are correct
}

module.exports = mongoose.model('Signup', signupSchema);

