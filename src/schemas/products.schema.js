import Joi from 'joi';

const schemaProducts = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.required(),
});

export default schemaProducts;
