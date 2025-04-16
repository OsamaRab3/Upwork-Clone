

import { Request, Response, NextFunction } from 'express'
import errorHandler from '../../../../shared/errors/errorHandler'
import { validationResult } from 'express-validator'
import * as authService from '../../services/auth'
import log from '../../utils/logger'

const signup = errorHandler.asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    log.info("signup controller ........... ")

    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return next(new errorHandler.CustomError(`Validation error ${errors.array()[0].msg}`, 400))
    }

    const { firstName, lastName, password, email, role, country } = req.body;

    const newUser = await authService.signup(firstName, lastName,  password,email, role, country);

    return res.status(201).json({
        status: "succes",
        message: "user Created success",
        data: newUser
    })


})


const login = errorHandler.asyncErrorHandler(async (req: Request, res: Response, next: NextFunction) => {
    log.info("Login controller ........... ")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return next(new errorHandler.CustomError(`Validation errorr ${errors.array()[0].msg}`, 400))
    }
    const {email,password} = req.body;

    const user = await authService.login(email,password);

    return res.status(200).json({
        status: "succes",
        message: "user log success",
        data: user
    })




})





export {
    login ,
    signup
}