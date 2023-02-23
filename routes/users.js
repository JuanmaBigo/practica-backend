import express from 'express';
import User from '../models/User.js';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  return res
    .status(200)
    .send('deberia mostrar todos los usuarios');
});

router.post(
  '/',
  async (req, res) => {
    try {
      let user = await User.create(req.body)
      return res.status(201).json({
        success: true,
        user: user,
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
