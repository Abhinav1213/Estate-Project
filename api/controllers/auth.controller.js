import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req, res,next) => { 
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).send("user created successfully"); 
    } catch (err) {
        res.json(
            {message: err.message, success: false, statusCode: err.statusCode || 500}
        );
        next(errorHandler(err.statusCode,err.message,res ));
    }
}

export const signin = async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const validuser = await User.findOne({ email: email });
        if (!validuser) {
            return next(errorHandler(404,"User not found",res));
        }
        const validPassword = await bcrypt.compare(password, validuser.password);
        if(!validPassword) {
            return next(errorHandler(400,"Invalid Password",res));
        }
        const token = jwt.sign({ id: validuser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
        const {password: pass, ...rest} = validuser._doc;
        res.cookie('access_token', token, { httpOnly: true, expiresIn: new Date(Date.now() + 60 * 60 * 1000) })
            .status(200)
            .json(rest);
    } catch(err) {
        next(err);
    }
}