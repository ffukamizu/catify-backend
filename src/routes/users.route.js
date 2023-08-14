import { Router } from 'express';

import validateSchema from '../middlewares/validateSchema.middleware.js';
import schemaSignIn from '../schemas/signin.schema.js';
import schemaSignUp from '../schemas/signup.schema.js';
import { postSignIn, postSignUp } from '../controllers/users.controller.js';

const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/signup', validateSchema(schemaSignUp), postSignUp);
usersRouter.post('/signin', validateSchema(schemaSignIn), postSignIn);

export default usersRouter;
