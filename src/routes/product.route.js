import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import schemaProduct from '../schemas/product.schema.js';

const productRouter = Router();

productRouter.get('/product', getProduct);
productRouter.post('/product', validateSchema(schemaProduct), postProduct);

export default productRouter;