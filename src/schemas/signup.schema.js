import Joi from 'joi';

const schemaSignUp = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    cpf: Joi.number().min(11).required(),
    phone: Joi.number().min(8).required()
});

export default schemaSignUp;
