
import { body } from 'express-validator'

const signupValidation = () => {
  return [
    body('firstName').notEmpty().withMessage("First Name is required"),
    body('lastName').notEmpty().withMessage('Last Name is required'),
    body('password')
      .notEmpty().withMessage('Password cannot be empty'),


    body('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email format'),

    body('role')
      .notEmpty().withMessage('Role is required')
      .isIn(['clint', 'freelancer']).withMessage('Role must be either clint or freelancer'),

    body('country').notEmpty().withMessage('country is required')
  ]
}

const loginValidation = () => {
  return [
    body('password')
      .notEmpty().withMessage('Password cannot be empty'),


    body('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email format'),
  ]
}

export  {
  signupValidation,
  loginValidation
}