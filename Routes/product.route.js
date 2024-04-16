import express from 'express'
import {postProduct,getProduct,getProductById,updateProduct,deleteProduct} from '../Controller/product.controller.js'

const router  = express.Router();

router.use(express.json());


router.post('/',postProduct)

router.get('/',getProduct)

router.get('/:id',getProductById)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)

export default router

