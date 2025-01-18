const CrudPersonalM = require('../lib/crudPersonalM');
const PersonalM = require('../models/personalM');

class PersonalRepository extends CrudPersonalM {
    constructor(){
        super(PersonalM);
    }
}
module.exports = new PersonalRepository();