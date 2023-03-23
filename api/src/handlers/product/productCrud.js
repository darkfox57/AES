import * as ProductControler from '../../controllers/products/product.controller'

//agregar un nuevo producto  +- post
export const createNewProduct = async (req, res) => {
  let { name, category, price, imageURL } = req.body
  const result = await ProductControler.createProduct(
    name,
    category,
    price,
    imageURL
  )
  res.status(200).json(result)
}

//detalle de producto
export const getProductsbyId = async (req, res) => {
  const { productId } = req.params

  const result = await ProductControler.getProductById(productId)
  res.status(203).json(result)
}

//modificar un producto
export const updateProductbyId = async (req, res) => {
  const { productId } = req.params
  const body = req.body
  console.log(req.body, productId)
  /*  const result = await ProductControler.updateProductById(productId, body);
  res.status(200).json(result); */
}

//eliminar un producto
export const deleteProductbyId = async (req, res) => {
  const { productId } = req.params
  const result = await ProductControler.deleteProductById(productId)
  res.status(200).json(result)
}
