// products.js
import express from "express";
import { createProduct, getAllProducts, getProductsCount } from "./products-controller.js";

const router = express.Router();

router.get("/count", getProductsCount);

router.get("/", getAllProducts);

router.get("/create", createProduct);

export default router;
