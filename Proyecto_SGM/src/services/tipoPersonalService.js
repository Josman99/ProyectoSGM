const tipoPersonalRepository = require('../repositories/tipoPersonalRepository');

class TipoPersonalMService {
    getAllTipoPersonal(){
        return tipoPersonalRepository.findAll();
    }

    getTipoPersonalById(id){
        return tipoPersonalRepository.findById(id);
    }

    createTipoPersonal(tipoPersonalData){
        return tipoPersonalRepository.create(tipoPersonalData);
    }

    updateTipoPersonal(id, tipoPersonalData){
        return tipoPersonalRepository.update(id, tipoPersonalData);
    }

    deleteTipoPersonal(id){
        return tipoPersonalRepository.delete(id);
    }
}
module.exports = new TipoPersonalMService();