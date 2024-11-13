import express from 'express';
import Pelicula from '../com.edu.unbosque.model/Pelicula';

const router = express.Router();

// Ruta para la página principal (mostrar todas las películas)
router.get('/', async (req, res) => {
  try {
      const peliculas = await Pelicula.find();
      if (peliculas.length === 0) {
          return res.render('peliculas', { mensaje: 'No hay películas disponibles.' });
      }
      
      // Asegúrate de pasar los objetos correctamente
      const peliculasData = peliculas.map(pelicula => pelicula.toObject()); // Convertir los documentos a objetos planos
      res.render('peliculas', { peliculas: peliculasData });
  } catch (err) {
      console.error('Error al obtener las películas:', err);
      res.status(500).send('Error en el servidor');
  }
});

export default router;
