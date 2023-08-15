import Joi from 'joi';

const schemaProducts = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.string().required(),
});

export default schemaProducts;
