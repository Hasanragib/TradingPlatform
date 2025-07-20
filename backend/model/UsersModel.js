const { model } = require ( "mongoose" );

const { UsersSchema } = require ( "../schemas/UsersSchema.js" );

const UsersModel = new model ( "User", UsersSchema );

module.exports = { UsersModel };
