var mongoose = require('mongoose');
var schema = mongoose.Schema;

var authorSchema = new schema({
	name: {type: String},
	lastName: {type: String}
});

module.exports = mongoose.model('Author', authorSchema);