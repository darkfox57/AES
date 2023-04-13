import cloudinary from "../config/cloudinary";

const uploadFile = async (imagePath, options = {}) => {
 try {
  const { url } = await cloudinary.uploader.upload(imagePath, options);
  return url;
 } catch (error) {
  throw new Error("ERROR_CLOUDINARY: La imagen no se pudo cargar");
 }
};

export default uploadFile;
