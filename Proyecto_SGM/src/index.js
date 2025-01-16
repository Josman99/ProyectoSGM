const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const pacienteController = require('./controllers/pacienteController')
//const rolController = require('./controllers/rolController')
//const personaController = require("./controllers/personaController")
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
  }));
  
  // Configurar CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Ajusta esto a la URL de tu frontend
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
app.use('/api/pacientes', pacienteController);
//app.use('/api/roles', rolController);
//app.use('/api/personas', personaController);

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})