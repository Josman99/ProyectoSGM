class PersonalM {
    static tableName = 'personalmedico';

    constructor(Id_Personal_Medico, Dni_Personal_Medico, Nombres_Personal_Medico, Apellidos_Personal_Medico,FechaNacimiento_Personal_Medico,Direccion_Personal_Medico,Telefono_Personal_Medico,Numero_Colegiatura,Id_Tipo_Personal,Id_Especialidad) {
        this.Id_Personal_Medico = Id_Personal_Medico;
        this.Dni_Personal_Medico = Dni_Personal_Medico;
        this.Nombres_Personal_Medico = Nombres_Personal_Medico;
        this.Apellidos_Personal_Medico = Apellidos_Personal_Medico;
        this.FechaNacimiento_Personal_Medico = FechaNacimiento_Personal_Medico;
        this.Direccion_Personal_Medico = Direccion_Personal_Medico;
        this.Telefono_Personal_Medico = Telefono_Personal_Medico;
        this.Numero_Colegiatura = Numero_Colegiatura;
        this.Id_Tipo_Personal = Id_Tipo_Personal;
        this.Id_Especialidad = Id_Especialidad;
    }
}
module.exports =PersonalM;