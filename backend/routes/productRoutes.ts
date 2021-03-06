import express, { Request, Response } from 'express';
import Product from '../models/productModel';
import { handleAsync } from '../utils/handleAsync';

const router = express.Router();

// @desc      Fetch all products
// @route     GET api/products
// @access    Public
router.get(
  '/',
  handleAsync(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.json(products);
  }),
);

// @desc      Fetch single product
// @route     GET api/products/:id
// @access    Public
router.get(
  '/:id',
  handleAsync(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  }),
);

export default router;
