const UserModel = require('../Model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (req, res)=>{
    try{
        // To Do Validation
        const email = req.body.email;
        const password = req.body.password;

        const salt = bcrypt.genSaltSync(10); //

        const hashedPassword = bcrypt.hashSync(password, salt) //

        const newlyCreatedAccount = await UserModel.create({
            ...req.body,
            password : hashedPassword,
            role : "CUSTOMER"
        })

        res.json({
            status : true,
            message : "Account Successfully Created. Please login",
        })

    }catch(error){
        console.log(error)
        res.json({
            status : false,
            message : "Something went wrong. Please try again!",
            errorMessage : error
        })
    }

}
const login = async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({email : email})
        if(!user){
           return res.json({
                status : false,
                message : "Invalid email. Please try again!",
                errorMessage : error
            })
        }
        console.log("DB stored Password", user.password );
        console.log("User entered Password", req.body.password );
        
        const isPasswordIsSame = await bcrypt.compare(password, user.password)
        console.log(isPasswordIsSame);

        if(!isPasswordIsSame){
            return res.json({
                status : false,
                message : "Invalid Password. Please try again!",
                errorMessage : error
            })
        }

        const currentTimeInSeconds = Math.floor(new Date().getTime()/1000);
        const expiryTimeInSeconds = currentTimeInSeconds + 3600;
        

        

        res.json({
            status : true,
            message : "Account Successfully LoggedIn.",
        })

    }catch(error){

        res.json({
            status : false,
            message : "Invalid username or Password. Please try again!",
            errorMessage : error
        })
    }
}

const userController = {
    signup, login
}

module.exports = userController;