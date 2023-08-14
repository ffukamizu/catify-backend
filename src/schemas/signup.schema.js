import Joi from 'joi';

const schemaSignUp = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    cpf: Joi.number().required(),
    phone: Joi.number().required()
});

export default schemaSignUp;
