

import bcrypt from 'bcryptjs'
import errorHandler from '../../../shared/errors/errorHandler'
import User from '../models/UserModel'
import log from '../utils/logger';

const signup = async (
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    role: string,
    country: string
) => {

    log.info("Signup service ... ")


    const user = await User.findOne({ email });
    if (user) {
        throw new errorHandler.CustomError("User already exists", 400);
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        firstName,
        lastName,
        password: hashPass,
        email,
        role,
        country,
    });

    return newUser;
};


const login = async (email: string, password: string) => {

    log.info("login service ... ")

    const user = await User.findOne({ email }).select('+password -__v');

    console.log('User: ',user)

    if (!user) {
        throw new errorHandler.CustomError("Email or password is not correct", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new errorHandler.CustomError("Email or password is not correct", 401);
    }


    const logedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }

    return logedUser;

}

export {
    login,
    signup
}