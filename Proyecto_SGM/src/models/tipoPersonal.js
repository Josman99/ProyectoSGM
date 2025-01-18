class TipoPersonal {
    static tableName = 'tipopersonalmedico';

    constructor(Id_Tipo_Personal, Tipo_Personal ) {
        this.Id_Tipo_Personal = Id_Tipo_Personal;
        this.Tipo_Personal = Tipo_Personal;
    }
}
module.exports =TipoPersonal;