import Product from "../../database/Product.model";

//obtienes todos los productos
export const getAllProducts = () => {
  const products = Product.find();
  return products;
};

//crea producto
export const createProduct = async (name, category, price, imageURL) => {
  const newproduct = new Product({
    name: name,
    category: category,
    price: price,
    imageURL: imageURL,
  });

  const result = await newproduct.save();
  return result;
};

//trame un producto por id
export const getProductById = (productId) => {
  const result = Product.findById({ _id: productId });
  return result;
};

//actualizar producto
export const updateProductById = (productId, body) => {
  return console.log(body, productId);
  /* const result = Product.findByIdAndUpdate({});
  return result; */
};

//eliminar producto
export const deleteProductById = (productId) => {
  return `eliminado el producto ${productId}`;
};
