import { searchProduct } from '../../controllers/products/search.controller'
import * as productController from '../../controllers/products/product.controller'

/**
 * !TODO:
 * ?http://localhost:3001/products/
 * ?http://localhost:3001/products?search=anymore
 */
export const searchProductorAllProduct = async (req, res, next) => {
  const { search } = req.query

  if (search) {
    console.log('entramos en busqueda')
    try {
      const a = searchProduct(search)
      res.json(a)
    } catch (error) {
      next(error)
    }
  }

  console.log('entramos en llamada')
  try {
    const result = await productController.getAllProducts()
    res.json(result)
  } catch (error) {
    next(error)
  }
}
