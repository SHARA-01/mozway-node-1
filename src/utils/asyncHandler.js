const asyncHandler = (fn) => async(req,res,next) => {
try{
    await fn(req,res,next)
}catch(error){
    res.status(error.statusCode).json({
        sucess: false,
    });
}
}

export default asyncHandler