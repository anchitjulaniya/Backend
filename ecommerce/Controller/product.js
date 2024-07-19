

const listProducts = async (req,res)=>{
    try{
       

        res.json({
            status : true,
            message : " Successfully ",
        })

    }catch(error){

        res.json({
            status : false,
            message : "Invalid . Please try again!",
            errorMessage : error
        })
    }
}

const addProducts = async (req, res)=>{
    try{
       

        res.json({
            status : true,
            message : " Successfully ",
        })

    }catch(error){

        res.json({
            status : false,
            message : "Invalid . Please try again!",
            errorMessage : error
        })
    }
}

const productController = {
    listProducts,
    addProducts
}

module.exports = productController;