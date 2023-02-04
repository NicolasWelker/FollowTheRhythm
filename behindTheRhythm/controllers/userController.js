const User = require('../models/signupModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {  //mongodb id property
   return jwt.sign({_id : _id}, process.env.SECRET, {expiresIn: '3d'}) //token expires in 3 days
}


// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{    //try to signup

        const user = await User.login( email, password );
        //create token
        const token = createToken(user._id);

        // res.status(200).json({email, user});
        res.status(200).json({email, token});

    }catch (error) {
        res.status(400).json({error: error.message});
    }
}


// signup a user
const signupUser = async (req, res) => {

    const {fullName, email, password, UType} = req.body

    try{    //try to signup

        const user = await User.signup(fullName, email, password, UType);
        //create token
        const token = createToken(user._id);

        // res.status(200).json({email, user});
        res.status(200).json({email, token});

    }catch (error) {
        res.status(400).json({error: error.message});
    }
} 

module.exports = { signupUser, loginUser }