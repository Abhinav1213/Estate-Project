export const errorHandler = (statusCode,message,res) => { 
    const error = new Error();
    error.statusCode = statusCode || 500;
    error.message = message || "Internal Server Error";
    // res.json({success:false,statusCode:error.statusCode,message: error.message});
    return error;
   
};