import { Router } from 'express';

import usersRouter from './users.route.js';
import productRouter from './product.route.js';

const router = Router();

router.use(usersRouter);
router.use(productRouter);

export default router;