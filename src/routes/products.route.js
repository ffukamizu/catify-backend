import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import schemaProducts from '../schemas/products.schema.js';
import { getProducts, postProducts } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.post('/products', validateSchema(schemaProducts), postProducts);

export default productsRouter;
