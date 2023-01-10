'use strict'
const express = require('express');
// const Login = require('../models/loginModel');
const {
  createLogin,
  getLogins,
  getLogin,
  deleteLogin,
  updateLogin,
} = require('../controllers/loginController')

const router = express.Router()

// GET all workouts
router.get('/', getLogins)

// GET a single workout
router.get('/:id', getLogin)

// POST a new workout
router.post('/',  createLogin)


//   res.json({mssg: 'POST a new ___'});

// DELETE a workout
router.delete('/:id', deleteLogin)

// UPDATE a workout
router.patch('/:id', updateLogin)

module.exports = router;