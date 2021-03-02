import { model, Schema, Document } from 'mongoose';
import { IUser } from './userModel';

interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
}

export interface IProduct extends Document {
  user: IUser['_id'];
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  reviews: IReview;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
}

const reviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const productSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Product = model<IProduct>('Product', productSchema);

export default Product;
