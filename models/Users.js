var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
    name: String,
    votepositive: String,
    votenegative: String
}, {collection: 'Users'});


module.exports = mongoose.model('Users', userModel);