import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
  cip: { type: String, required: true },
  titulo_p: { type: String, required: true },
  ano_produccion: { type: Number, required: true },
  titulo_s: { type: String },
  nacionalidad: { type: String },
  presupuesto: { type: Number, required: true },
  duracion: { type: Number, required: true },
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema, 'Pelicula');  // Aquí especificamos el nombre de la colección 'Pelicula'
export default Pelicula;
