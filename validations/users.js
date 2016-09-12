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
    bio: Joi.string()
      .label('Bio')
      .trim(),
    avatarUrl: Joi.string()
      .label('Avatar URL')
      .min(7)
      .trim()
      .uri()
  }
};
