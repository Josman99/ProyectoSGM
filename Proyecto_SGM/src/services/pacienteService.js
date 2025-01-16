const pacienteRepository = require('../repositories/pacienteRepository');

class PacienteService {
    getAllPaciente(){
        return pacienteRepository.findAll();
    }

    getPersonaById(id){
        return pacienteRepository.findById(id);
    }

    createPaciente(pacienteData){
        return pacienteRepository.create(pacienteData);
    }

    updatePaciente(id, pacienteData){
        return pacienteRepository.update(id, pacienteData);
    }

    deletePaciente(id){
        return pacienteRepository.delete(id);
    }
}
module.exports = new PacienteService();