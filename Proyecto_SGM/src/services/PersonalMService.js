const personalMRepository = require('../repositories/personalRepository');

class PersonalMService {
    getAllPersonalM(){
        return personalMRepository.findAll();
    }

    getPersonalMById(id){
        return personalMRepository.findById(id);
    }

    createPersonalM(personalData){
        return personalMRepository.create(personalData);
    }

    updatePersonalM(id, personalData){
        return personalMRepository.update(id, personalData);
    }

    deletePersonalM(id){
        return personalMRepository.delete(id);
    }
}
module.exports = new PersonalMService();