const appMiddleware = (req, res, next)=>{
    //logic
    console.log(`inside application specifice middleware`);
    next()
}

module.exports = appMiddleware