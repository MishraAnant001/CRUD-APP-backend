import product from '../models/product.model.js'


const postProduct = async (req,res)=>{
    try {
        const response = await product.create(req.body);
        res.status(201).json({
            message: "Product created successfully",
            response: response,
        })
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: error.message,
        })
    }
}
const getProduct =async (req,res)=>{
    try {
        const response = await product.find({});
        res.status(201).json(response)
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: error.message,
        })
    }
}

const getProductById = async (req,res)=>{
    try {
        const response = await product.findById(req.params.id);
        // const response = await product.find({});
        res.status(201).json(response)
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            message: error.message,
        })
    }
}

const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const response = await product.findByIdAndUpdate(id,req.body);
        if(!response){
            return res.status(404).json({
                message: "Product not found",
            });
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const response = await product.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({
                message: "Product not found",
            });
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

export {postProduct,getProduct,getProductById,updateProduct,deleteProduct}