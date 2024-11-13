import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./com.edu.unbosque.routes/index.routes";
import path from "path";
import { create } from 'express-handlebars';

const app = express();

//Motor de plantillas
app.set("views", path.join(__dirname, "com.edu.unbosque.view"));

var hbs = create({
    layoutsDir: path.join(app.get("views"), "Layouts"), 
    defaultLayout: "main", // Indica que main.hbs es el layout por defecto
    extname: ".hbs",       // Usa la extensión .hbs
});


app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

//Routes
app.use(indexRoutes);

export default app;
