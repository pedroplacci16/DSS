const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/player.router.js')
// leer archivo de configuracion
require('dotenv').config();

// para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());
app.use('/players',router);

// Inicio del servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;

