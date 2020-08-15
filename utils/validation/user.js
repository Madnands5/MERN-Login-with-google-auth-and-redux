const joi =require('@hapi/joi');

const regschema=joi.object({
    
    name:joi.string().min(6).required(),
    email:joi.string().min(6).required().email(),
    password:joi.string().min(6).required()
})
const logschema=joi.object({
   
    email:joi.string().min(6).required().email(),
    password:joi.string().min(6).required()
})

module.exports.logschema=logschema;
module.exports.regschema=regschema;
