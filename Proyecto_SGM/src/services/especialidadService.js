const EspecialidadRepository = require('../repositories/especialidadRepository');

class EspecialidadService {
    getAllEspecialidad(){
        return EspecialidadRepository.findAll();
    }

    getEspecialidadById(id){
        return EspecialidadRepository.findById(id);
    }

    createEspecialidad(especialidadData){
        return EspecialidadRepository.create(especialidadData);
    }

    updateEspecialidad(id, especialidadData){
        return EspecialidadRepository.update(id, especialidadData);
    }

    deleteEspecialidad(id){
        return EspecialidadRepository.delete(id);
    }
}
module.exports = new EspecialidadService();