const CrudPaciente = require('../lib/crudPaciente');
const Paciente = require('../models/paciente');

class PacienteRepository extends CrudPaciente {
    constructor(){
        super(Paciente);
    }
}
module.exports = new PacienteRepository();