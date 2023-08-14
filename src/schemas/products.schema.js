import Joi from 'joi';

const schemaProducts = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    cpf: Joi.number().required(),
    phone: Joi.number().required(),
    user_id: Joi.number().integer().required()
});

export default schemaProducts;
