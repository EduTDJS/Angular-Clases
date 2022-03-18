import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { PresupuestoService } from '../presupuesto/service/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ListadoComponent
  }

]

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PresupuestoService
  ]
})
export class TransaccionesModule { }
