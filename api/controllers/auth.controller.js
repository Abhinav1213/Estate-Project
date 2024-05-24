import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const signup = async(req, res) => { 
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).send("user created successfully"); 
    } catch (err) {
        res.status(409).send(err.message);
    }

}