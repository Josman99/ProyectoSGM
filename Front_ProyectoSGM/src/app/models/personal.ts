export class Personal{
    Id_Personal_Medico?: number;
    Dni_Personal_Medico: String;
    Nombres_Personal_Medico: String;
    Apellidos_Personal_Medico: String;
    FechaNacimiento_Personal_Medico: String;
    Direccion_Personal_Medico: String;
    Telefono_Personal_Medico: String;
    Numero_Colegiatura: String;
    Id_Tipo_Personal: number;
    Id_Especialidad: number;

    constructor(Dni_Personal_Medico: string, Nombres_Personal_Medico: string, Apellidos_Personal_Medico: String, FechaNacimiento_Personal_Medico: String,
        Direccion_Personal_Medico: String, Telefono_Personal_Medico: String, Numero_Colegiatura: String, Id_Tipo_Personal: number,Id_Especialidad: number
    ) {
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