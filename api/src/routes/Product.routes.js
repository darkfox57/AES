import { Router } from "express";
import { searchProductorAllProduct } from "../handlers/product/product.handler";
import * as handlerCrudProduct from "../handlers/product/productCrud";

const productRoute = Router();

productRoute.get("/", searchProductorAllProduct);
productRoute.post("/", handlerCrudProduct.createNewProduct);
productRoute.get("/:productId", handlerCrudProduct.getProductsbyId);
productRoute.put("/:productId", handlerCrudProduct.updateProductbyId);
productRoute.delete("/:productId", handlerCrudProduct.deleteProductbyId);

export default productRoute;
