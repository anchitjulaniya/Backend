const jwt = require('jsonwebtoken');

const UserModel = require('../Model/user')

const authMiddleware = async (req, res, next)=>{
  /*
    * 1. If the token in present in request
    * 2. Check if the token is valid (Validate the generating source)
    * 3. If the token is expired
    * 4. User details validation
   */
  try{
    const bearerToken = req.headers.authorization;
    console.log("bearerToken", bearerToken)
    if(!bearerToken){
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }


  }catch(error){
    console.log(error);
    return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
  }
}


module.exports = authMiddleware;