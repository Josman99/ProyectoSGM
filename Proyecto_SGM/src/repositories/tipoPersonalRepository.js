const CrudTipoPersonal = require('../lib/crudTipoPersonal');
const TipoPersonal = require('../models/tipoPersonal');

class TipoPersonalRepository extends CrudTipoPersonal {
    constructor(){
        super(TipoPersonal);
    }
}
module.exports = new TipoPersonalRepository();