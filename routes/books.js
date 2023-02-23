import express from 'express';
import Book from '../models/Book.js';
let router = express.Router();

/* GET categories listing. */
router.get(
    '/',  // endpoint a concatenar con el endpoint principal 
    (req, res) => {  // funcion que se va a ejecutar cada vez que se llame al endpoint
        // console.log(req)
        return res
            .status(200)  // exito para la lectura
            .send('deberia mostrar todos los libros')  // send envia mensajes al cliente
    });


router.post(
    '/',
    async (req, res) => {
        try {
            let book = await Book.create(req.body)
            return res.status(201).json({
                success: true,
                category: book,
                id: book._id
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                success: false,
                message: 'No se pudo crear'
        })
    }
})

export default router;
