import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule, Route, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class TransaccionesModule { }
