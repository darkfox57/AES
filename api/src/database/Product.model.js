import { model, Schema } from 'mongoose';

const Product = new Schema(
  {
    name: String,
    category: String,
    price: Number,
    imageURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  };
)

export default model('Product', Product)
