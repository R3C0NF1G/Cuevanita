import express from 'express';
import { create } from 'express-handlebars';
import indexRoutes from './com.edu.unbosque.routes/index.routes';
import path from 'path';

const app = express();

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear cuerpos JSON y formularios
app.use(express.urlencoded({ extended: true })); // Para formularios x-www-form-urlencoded
app.use(express.json()); // Para cuerpos JSON

// Motor de plantillas
app.set("views", path.join(__dirname, "com.edu.unbosque.view"));

const hbs = create({
    layoutsDir: path.join(app.get('views'), 'Layouts'),
    defaultLayout: 'main', // Layout por defecto
    extname: '.hbs',       // Usar extensión .hbs
    allowProtoPropertiesByDefault: true, // Permitir el acceso a propiedades del prototipo
});

app.engine('.hbs', hbs.engine);
app.set("view engine", '.hbs');

// Rutas
app.use(indexRoutes);

export default app;
