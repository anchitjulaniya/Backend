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