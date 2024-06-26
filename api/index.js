import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("DB Connected");
}).catch((err) => { 
    console.log(err);
});

app.use("/api/auth", authRouter);

app.listen(3000, () => { 
    console.log("Server is running on port 3000");
});


// middleware for error handling
app.use((err, req, res, next) => { 
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});