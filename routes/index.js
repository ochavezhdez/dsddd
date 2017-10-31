var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var getBooks = require('../models/author');
var getBooks = require('../models/book');
var bookCtrl = require('../controllers/bookCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.route('/libros')
	.get(bookCtrl.getBooks)
	.post(upload.array(), bookCtrl.addBook);

router.route('/libros/:id')
	.get(bookCtrl.getBookById)						//	Obtener el libro identificado con ID. En caso de no
													//	encontrar el libro, retornar un objeto JSON con un
													//	código y descripción del error.

	.put(upload.array(), bookCtrl.updateBookById)	// 	Actualizar información del libro identificado con ID. El
													//	método debe de regresar el registro actualizado. En
													//	caso de no encontrar el libro, retornar un objeto JSON
													//	con un código y descripción del error.

	.delete(bookCtrl.deleteBookById);				// 	Eliminar el libro identificado con ID. El método debe de
													//	regresar el registro eliminado. En caso de no encontrar
													//	el libro, retornar un objeto JSON con un código y
													//	descripción del error.
	
router.route('/autores')
	.get(bookCtrl.getAuthors)						// 	Obtener todos los autores de los libros en la base de
													//	datos.
	.post(upload.array(), bookCtrl.addAuthor);
	
router.route('/autores/:nombre')
	.get(bookCtrl.getBooksByAuthor)					//	Obtener los libros realacionados con el autor
													//	(NOMBRE). Debido a que NOMBRE es de tipo String,
													//	la búsqueda no distinguirá entre mayúsuclas y
													//	minúsculas. En caso de no encontrar el autor, retornar
													//	un objeto JSON con un código y descripción del error.

	.put(upload.array(), bookCtrl.updateAuthor)		//	Actualizar el nombre del autor identificado con
													//	NOMBRE. Deben de actualizarse el nombre del autor
													//	en todos los libros. El método debe de regresar todos
													//	los registros actualizados. En caso de no encontrar
													//	libros del autor, retornar un objeto JSON con un código
													//	y descripción del error.

	.delete(bookCtrl.deleteBookByAuthor);			//	Eliminar todos los libros que se encuentren
													//	relacionaciodos con el autor (NOMBRE). El método
													//	debe de regresar todos los registros eliminados. En
													//	caso de no encontrar libros autor, retornar un objeto
													//	JSON con un código y descripción del error.

module.exports = router;
