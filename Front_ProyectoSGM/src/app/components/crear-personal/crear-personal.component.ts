import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personal } from 'src/app/models/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-crear-personal',
  templateUrl: './crear-personal.component.html',
  styleUrls: ['./crear-personal.component.css']
})
export class CrearPersonalComponent implements OnInit {
  personalForm: FormGroup;
  titulo = 'Crear Personal';
  id: string | null;
  especialidades: any[] = [];
  tipoPersonales: any[] = [];

  constructor(private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService,
    private _personalService: PersonalService,
    private aRouter: ActivatedRoute) { 
    this.personalForm = this.fb.group({
      Dni_Personal_Medico: ['', Validators.required],
      Nombres_Personal_Medico: ['', Validators.required],
      Apellidos_Personal_Medico: ['', Validators.required],
      FechaNacimiento_Personal_Medico: ['', Validators.required],
      Direccion_Personal_Medico: ['', Validators.required],
      Telefono_Personal_Medico: ['', Validators.required],
      Numero_Colegiatura: ['', Validators.required],
      // Id_Tipo_Personal: ['', Validators.required],
      // Id_Especialidad: ['', Validators.required],
      Especialidad: ['', Validators.required],
      TipoPersonal: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esModificar()
    this.obtenerEspecialidades();
    this.obtenerTipoPers();
  }

  agregarPersonal() {
    
    const PERSONAL: Personal = {
      Dni_Personal_Medico: this.personalForm.get('Dni_Personal_Medico')?.value,
      Nombres_Personal_Medico: this.personalForm.get('Nombres_Personal_Medico')?.value,
      Apellidos_Personal_Medico: this.personalForm.get('Apellidos_Personal_Medico')?.value,
      FechaNacimiento_Personal_Medico: this.personalForm.get('FechaNacimiento_Personal_Medico')?.value,
      Direccion_Personal_Medico: this.personalForm.get('Direccion_Personal_Medico')?.value,
      Telefono_Personal_Medico: this.personalForm.get('Telefono_Personal_Medico')?.value,
      Numero_Colegiatura: this.personalForm.get('Numero_Colegiatura')?.value,
      Id_Tipo_Personal: this.personalForm.get('TipoPersonal')?.value,
      Id_Especialidad: this.personalForm.get('Especialidad')?.value
    }

    if(this.id !==null) {
      //editamos personal
      this._personalService.modificarPersonal(this.id, PERSONAL).subscribe(data =>{
        this.toastr.success('El personal fue actualizado con exito!', 'Personal Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.personalForm.reset();
      })
    } else {
      //insertamos personal
      console.log(PERSONAL);
      this._personalService.insertarPersonal(PERSONAL).subscribe(data => {
        this.toastr.success('El personal fue registrado!', 'Personal Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.personalForm.reset();
      })
    }
    
  }

  esModificar() {
    if(this.id !== null) {
      this.titulo = 'Modificar Personal';
      this._personalService.obtenerPersonal(this.id).subscribe(data => {
        this.personalForm.setValue({
          Dni_Personal_Medico: data.Dni_Personal_Medico,
          Nombres_Personal_Medico: data.Nombres_Personal_Medico ,
          Apellidos_Personal_Medico: data.Apellidos_Personal_Medico,
          FechaNacimiento_Personal_Medico: data.FechaNacimiento_Personal_Medico,
          Direccion_Personal_Medico: data.Direccion_Personal_Medico,
          Telefono_Personal_Medico: data.Telefono_Personal_Medico,
          Numero_Colegiatura: data.Numero_Colegiatura,
          Id_Tipo_Personal: 1, //estos son valores momentaneos
          Id_Especialidad: 5 //estos son valores momentaneos
        })
      })
    }
  }
  //Implementacion de hoy 
  obtenerEspecialidades(): void {
    this._personalService.listarEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error('Error al obtener especialidades:', error);
      });
  }
  //

  //Implementacion de hoy 
  obtenerTipoPers(): void {
    this._personalService.listarTipoPerso().subscribe(
      (data) => {
        this.tipoPersonales = data;
      },
      (error) => {
        console.error('Error al obtener Tipo Personal:', error);
      });
  }
  //

}
