import { Router } from 'express';

import usersRouter from './users.route.js';
import productsRouter from './products.route.js';

const router = Router();

router.use(usersRouter);
router.use(productsRouter);

export default router;