'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    name: Joi.string()
      .min(3)
      .max(31)
      .label('Name')
      .trim(),
    email: Joi.string()
      .email()
      .label('Email')
      .max(63)
      .trim(),
    meetupId: Joi.string()
      .label('Meetup Id')
      .max(63)
      .trim()
  }
};
