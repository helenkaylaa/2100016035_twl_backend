import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();

app.use(express.json());

const dbUrl = 'mongodb://127.0.0.1/2100016035_twl';
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });

  app.use('/users', userRouter);

  app.use('/products', productRouter);

  const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
