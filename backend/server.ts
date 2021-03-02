import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import 'colorts/lib/string';
import productRoutes from './routes/productRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
);
