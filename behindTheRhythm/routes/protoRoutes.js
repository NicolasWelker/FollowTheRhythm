'use strict'
const express = require('express');
// const Login = require('../models/loginModel');
const {
  createSignup,
  deleteALLSignups,
  getSignups,
  getSignup,
  deleteSignup,
  updateSignup,
} = require('../controllers/signupController')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()
//require auth for all user route before it can proceed with the routes.
router.use(requireAuth)


// GET all signup
router.get('/', getSignups)


//DELETE entire Signups collection
router.delete('/DELETEALL', deleteALLSignups)

// GET a single signup
router.get('/:id', getSignup)

// POST a new signup
router.post('/',  createSignup)


//   res.json({mssg: 'POST a new ___'});

// DELETE a signup
 router.delete('/:id', deleteSignup)  

// UPDATE a signup
router.patch('/:id', updateSignup)

module.exports = router;