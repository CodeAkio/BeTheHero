const { celebrate, Joi, Segments } = require('celebrate');

module.exports = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
});
