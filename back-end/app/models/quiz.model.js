const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  theme: Joi.string().required(),
  name: Joi.string().required(),
  official: Joi.boolean(),
  globalGoodAnswer: Joi.number().required(),
  globalBadAnswer: Joi.number().required(),
})
