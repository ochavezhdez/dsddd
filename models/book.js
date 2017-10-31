var mongoose = require('mongoose');
var schema = mongoose.Schema;

var bookSchema = new schema({
	title: {type: String},
	author: {type: schema.ObjectId, ref: 'author', require: true},
	year: {type: Number},
	genere: {type: String}
});

module.exports = mongoose.model('Book', bookSchema);