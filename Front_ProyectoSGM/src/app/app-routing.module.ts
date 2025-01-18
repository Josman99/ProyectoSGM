import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonalComponent } from './components/listar-personal/listar-personal.component';
import { CrearPersonalComponent } from './components/crear-personal/crear-personal.component';

const routes: Routes = [
  { path: '', component: ListarPersonalComponent },
  { path: 'crear-personal', component: CrearPersonalComponent },
  { path: 'modificar-personal/:id', component: CrearPersonalComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
