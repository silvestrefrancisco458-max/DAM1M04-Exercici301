const express = require("express");
const hbs = require("hbs");
const path = require("path");

// DATOS DE JSON
// LEE EL JSON
const cities = require("./data/cities.json").cities;
const countries = require("./data/countrie.json").countrie;
const site = require("./data/site.json");

const app = express();

// Configurar HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// HELPER LTE
hbs.registerHelper("lte", function (a, b) {
  return a <= b;
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Ruta principal 
app.get("/", (req, res) => { 
    res.render("index", site); 
});

// Ruta de informe
app.get("/informe", (req, res) => { 
    res.render("informe", { 
        title: site.title, 
        subtitle: site.subtitle, 
        cities, 
        countries 
    }); 
});

// Para El Host
app.listen(3000, () => console.log("http://localhost:3000"));

// PARA ACTIVAR.
// npm run dev
// si da error Pon esto.
// chmod +x node_modules/.bin/nodemon
// mv server/Views server/views
// Y LUEGO
// npm run dev