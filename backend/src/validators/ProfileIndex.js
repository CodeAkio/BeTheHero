const { celebrate, Joi, Segments } = require('celebrate');

module.exports = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});
