import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import validateAuth from '../middlewares/validateAuth.middleware.js';
import schemaProducts from '../schemas/products.schema.js';
import { getProducts, getProductsById, getProductsList, postProducts } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', getProductsById);
productsRouter.get('/products/:id/list', getProductsList);
productsRouter.post('/products', validateAuth, validateSchema(schemaProducts), postProducts);

export default productsRouter;