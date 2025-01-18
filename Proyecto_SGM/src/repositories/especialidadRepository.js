const CrudEspecialidad = require('../lib/crudEspecialidad');
const Especialidad = require('../models/especialidad');

class EspecialidadRepository extends CrudEspecialidad {
    constructor(){
        super(Especialidad);
    }
}
module.exports = new EspecialidadRepository();