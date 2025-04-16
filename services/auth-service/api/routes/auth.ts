

import express from 'express'
const router = express.Router()
import {loginValidation,signupValidation} from '../../middleware/Validation'
import {login,signup} from '../controllers/auth'

router.route('/signup')
    .post(signupValidation(),signup)



router.route('/login')
    .post(loginValidation(),login)



export default  router;