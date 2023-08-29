import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().min(3).max(16).required(),
    username: Joi.string().alphanum().min(3).max(16).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
});

export {userValidator}