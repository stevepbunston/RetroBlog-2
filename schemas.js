const Joi = require('joi');

module.exports.articleSchema = Joi.object({
    article: Joi.object({
        title: Joi.string().required(),
        game: Joi.string().required(),
        release: Joi.string().required(),
        console: Joi.string().required(),
        blog: Joi.string().required(),
        movies: Joi.array().items(Joi.object({
            title: Joi.string().required()
        })).required(),
        images: Joi.array().items(Joi.object({
            url: Joi.string().required(),
            filename: Joi.string().required()
        })).required()
    }).required()
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(10),
        body: Joi.string().required()
    }).required()
});