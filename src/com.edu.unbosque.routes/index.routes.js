import express from 'express';
import Pelicula from '../com.edu.unbosque.model/Pelicula';

const router = express.Router();

// Ruta para mostrar el formulario de agregar nueva película
router.get('/peliculas/nueva', (req, res) => {
  res.render('nueva'); // Asegúrate de que esta vista esté disponible
});

// Ruta para manejar el envío del formulario de agregar nueva película
router.post('/peliculas/nueva', async (req, res) => {
  try {
    const { cip, titulo_p, ano_produccion, titulo_s, nacionalidad, presupuesto, duracion } = req.body;
    // Crear una nueva película
    const nuevaPelicula = new Pelicula({
      cip,
      titulo_p,
      ano_produccion,
      titulo_s,
      nacionalidad,
      presupuesto,
      duracion
    });

    // Guardar la nueva película en la base de datos
    await nuevaPelicula.save();

    // Redirigir a la página de películas
    res.redirect('/');
  } catch (error) {
    console.error('Error al agregar la película:', error);
    res.status(500).send('Error al agregar la película');
  }
});

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

// Ruta para editar película
router.get('/peliculas/editar/:id', async (req, res) => {
  try {
      const pelicula = await Pelicula.findById(req.params.id).lean();  // .lean() para obtener un objeto plano
      if (!pelicula) {
          return res.status(404).send('Película no encontrada');
      }
      res.render('editar', { pelicula });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener la película');
  }
});

// Ruta para actualizar película
router.post('/peliculas/editar/:id', async (req, res) => {
  try {
      const { cip, titulo_p, ano_produccion, titulo_s, nacionalidad, presupuesto, duracion } = req.body;
      const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, { cip, titulo_p, ano_produccion, titulo_s, nacionalidad, presupuesto, duracion }, { new: true });
      if (!pelicula) {
          return res.status(404).send('Película no encontrada');
      }
      res.redirect('/');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al actualizar la película');
  }
});

// Ruta para eliminar película
router.get('/peliculas/eliminar/:id', async (req, res) => {
  try {
      const pelicula = await Pelicula.findByIdAndDelete(req.params.id);
      if (!pelicula) {
          return res.status(404).send('Película no encontrada');
      }
      // Redirigir a la lista de películas
      res.redirect('/');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al eliminar la película');
  }
});


export default router;
