import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import products from './products.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/products', (req, res) => {
  return res.status(200).json(products);
});

app.get('*', (req, res) => {
  res.status(404).json({ message: '404 Page Not Found' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
