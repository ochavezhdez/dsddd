var mongoose = require('mongoose');
var bookModel = mongoose.model('Book');
var authorModel = mongoose.model('Author');

exports.getBooks = function(req, res, next) {
	bookModel.find(function(err, books) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(books);
	});
};

exports.addBook = function(req, res, next) {
	var book = new bookModel({
		title: req.body.title,
		author: req.body.author,
		year: req.body.year,
		genere: req.body.genere
	});

	book.save(function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);		
	});
};

exports.getBookById = function(req, res, next) {
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
	});
};

exports.updateBookById = function(req, res, next) {
	bookModel.update({_id: req.params.id}, 
		{
			title: req.body.title,
			author: req.body.author,
			year: req.body.year,
			genere: req.body.genere
		}, { multi: true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}
		}
	);
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
	});
};

exports.deleteBookById = function(req, res, next) {
	bookModel.find({_id: req.params.id}, function(err, book) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(book);
		bookModel.remove({_id: req.params.id}, function(err) {
			if (err) {
				return res.status(500, err.message);
			}
		});
	});
};

exports.getAuthors = function(req, res, next) {
	authorModel.find(function(err, authors) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(authors);
	});
};

exports.addAuthor = function(req, res, next) {
	var author = new authorModel({
		name: req.body.name,
		lastName: req.body.lastName
	});

	author.save(function(err, author) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(author);		
	});
};

exports.getBooksByAuthor = function(req, res, next) {
	bookModel.find({author: req.params.nombre}, function(err, books) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(books);
	});
};

exports.updateAuthor = function(req, res, next) {
	bookModel.update({author: req.params.nombre}, 
		{
			author : req.body.author
		}, { multi : true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}
		}
	);
	res.status(200).jsonp("End update.");
};

exports.deleteBookByAuthor = function(req, res, next) {
	bookModel.remove({author: req.params.nombre}, function(err) {
		if (err) {
			return res.status(500, err.message);
		}
	});
	res.status(200).jsonp("End remove.");
};
