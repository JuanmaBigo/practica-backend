import userRouter from './users.js'
import categoriesRouter from './categories.js'
import booksRouter from './books.js'


import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Api de prueba' });
});


// en el enrutador principal voy a enrutar todos los recursos
// es decir voy a llamar y configurar las rutas de usuarios, categorias, libros, etc
// a traves del metodo .use() le indico al enrutador principal que utilice esas rutas con el endpoint correspondiente
router.use('/users',userRouter);
router.use('/categories', categoriesRouter);
router.use('/books', booksRouter);


export default router;
