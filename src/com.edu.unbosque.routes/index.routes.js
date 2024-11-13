import { Router } from "express";

const router = Router();

// Ruta para la página principal
router.get("/", (req, res) => {
    // Renderiza la vista 'index' ubicada en el directorio 'com.edu.unbosque.view'
    res.render("index"); 
});

router.get("/about", (req, res) => {
    // Renderiza la vista 'index' ubicada en el directorio 'com.edu.unbosque.view'
    res.render("about"); 
});

router.get("/contact", (req, res) => {
    // Renderiza la vista 'index' ubicada en el directorio 'com.edu.unbosque.view'
    res.render("contact"); 
});

export default router;
