const express = require('express');
const helmet = require('helmet');
const cors = require("cors");

require('dotenv').config();
const pacienteController = require('./controllers/pacienteController')
const personalController = require('./controllers/personalMController')
const tipoPersonalController = require("./controllers/tipoPersonalController")
const especialidadController = require("./controllers/especialidadController")
const app = express();
app.use(cors())
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
app.use('/api/personalMedico', personalController);
app.use('/api/tipoPersonal', tipoPersonalController);
app.use('/api/especialidad', especialidadController);

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})