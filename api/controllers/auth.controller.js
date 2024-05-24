import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res,next) => { 
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).send("user created successfully"); 
    } catch (err) {
        next(errorHandler(err.statusCode,err.message ));
    }
}