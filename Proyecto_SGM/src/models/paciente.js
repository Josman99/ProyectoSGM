class Paciente {
    static tableName = 'paciente';

    constructor(id_paciente, Doc_Id_Paciente, Nombres_Paciente, Apellidos_Paciente,FechaNacimiento_Paciente,Direccion_Paciente,Telefono_Paciente,Apoderado_Paciente ) {
        this.id_paciente = id_paciente;
        this.Doc_Id_Paciente = Doc_Id_Paciente;
        this.Nombres_Paciente = Nombres_Paciente;
        this.Apellidos_Paciente = Apellidos_Paciente;
        this.FechaNacimiento_Paciente = FechaNacimiento_Paciente;
        this.Direccion_Paciente = Direccion_Paciente;
        this.Telefono_Paciente = Telefono_Paciente;
        this.Apoderado_Paciente = Apoderado_Paciente;
    }
}
module.exports = Paciente;