const express = require("express");
const hbs = require("hbs");
const path = require("path");
const cities = require("./data/cities.json");
const countrie = require("./data/countrie.json");
const site = require("./data/site.json");

const app = express();

// Configurar HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Ruta principal 
app.get("/", (req, res) => { 
    res.render("index"); 
});

// MOVIES
app.get("/movies", (req, res) => { 
    res.render("informe", { 
        titulo: "Listado de Películas", 
        datos: cities 
    }); 
});

 // Customers
app.get("/customers", (req, res) => {
    res.render("informe", {
        titulo: "Listado de Cliente",
        datos: countrie
    });
});

// Ruta Site
app.get("/site", (req, res) => {
    res.render("informe", {
        titulo: "Informacion del Sitio",
        datos: site
    });
});

// Para El Host
app.listen(3000, () => console.log("http://localhost:3000"));