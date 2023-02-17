import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../../controllers/reportes/telefonoControllers.js";
import { verifyUser } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get('/telefono',verifyUser, getProducts);
router.get('/telefono/:id',verifyUser, getProductById);
router.post('/telefono',verifyUser, createProduct);
router.patch('/telefono/:id',verifyUser, updateProduct);
router.delete('/telefono/:id',verifyUser, deleteProduct);

export default router;