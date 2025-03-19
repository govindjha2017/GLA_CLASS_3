const Joi = require('joi');

const productscheama = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required().min(0),
    desc: Joi.string().required(),
})

module.exports= productscheama;