import express from 'express';  // Modulo necesario para crear todo
import path from 'path'; // Modulo para manejar rutas
import cookieParser from 'cookie-parser'; // Libreria para manejar cookies
import logger from 'morgan';  // Libreria para manejar logs
import indexRouter from './routes/index.js';
// Traen las rutas de los endpoints
import usersRouter from './routes/users.js';
import { __dirname } from './utils.js';
import 'dotenv/config.js'

let app = express(); // Define la aplicacion de back ejecutando el modulo de express

// view engine setup // app.set define variables de configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use es para agregar middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// @app => .use() para usar middlewares para enrutarme con esas "palabritas"
app.use('/', indexRouter);
app.use('/users', usersRouter); // estoy usando el endpoint /users para enrutarme con las rutas de los usuarios
//app.use('/products', productsRouter);
// '/product' es el endpoint
// productRouter es el enrutador de ese recurso (me va a conectar con las operaciones de crear/leer/modificar/eliminar productos )

// module.exports = app;
export default app;
