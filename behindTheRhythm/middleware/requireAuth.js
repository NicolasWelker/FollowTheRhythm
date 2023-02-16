

const jwt = require('jsonwebtoken')
const User = require('../models/signupModel')

const requireAuth = async (req, res, next) => {  // invoke the next function to
   //                   // invoke next peice of middlewear or handler 
    //verify authentication
    const {authorization} = req.headers
    //destructure authorization property from the headers

    if (!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1] //take first (not zeroth) element from  split, value of the token
    
    //verify token 
    try{

        const {_id} = jwt.verify(token, process.env.SECRET) //VERIFY TOKEN WITH SECRET
       //                 //return the payload from token
        
        req.user = await User.findOne({_id}).select('id') //attaching user property to request
        next() // 
    }catch (error) {

        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})

    }

}

module.exports = requireAuth


//verify on postman post with bearer token