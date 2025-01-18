import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Personal } from 'src/app/models/personal';
import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-listar-personal',
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css']
})
export class ListarPersonalComponent implements OnInit{

  listPersonal: Personal[] = [];
  
  constructor(private _personalService: PersonalService,
    private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.obtenerPersonal()
    
  }

  obtenerPersonal() {
    this._personalService.getPersonal().subscribe(data=> {
      console.log(data);
      this.listPersonal = data;
    }, error => {
      console.log(error)
    })
  }



  eliminarPersonal(id: any) {
    this._personalService.eliminarPersonal(id).subscribe(data => {
      this.toastr.error('El personal fue eliminado con exito' ,'Personal Eliminado');
      this.obtenerPersonal();
    }, error => {
      console.log(error);
    })
  }

}
