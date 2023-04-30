const {Schema} = require("mongoose");

const userSchema = new Schema({
    // Identifiers
    id: {type: String},
    name: {type: String},   
});

module.exports = userSchema;