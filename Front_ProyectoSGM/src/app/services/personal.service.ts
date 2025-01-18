import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personal } from '../models/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  url = 'http://localhost:3000/api/personalMedico/';
  urlEs = 'http://localhost:3000/api/especialidad/';
  urlTiPe = 'http://localhost:3000/api/tipoPersonal/';

  constructor(private http: HttpClient) { }

  getPersonal(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarPersonal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  insertarPersonal(personal: Personal): Observable<any> {
    return this.http.post(this.url, personal);
  }

  obtenerPersonal(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  modificarPersonal(id: string, personal: Personal): Observable<any>{
    return this.http.put(this.url + id, personal);
  }

  listarEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>(this.urlEs);
  }
  listarTipoPerso(): Observable<any[]> {
    return this.http.get<any[]>(this.urlTiPe);
  }
}
