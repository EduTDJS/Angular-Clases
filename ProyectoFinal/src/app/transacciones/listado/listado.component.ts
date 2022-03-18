import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PresupuestoService } from 'src/app/presupuesto/service/presupuesto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public appSrv: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    console.log(this.appSrv.getTransacciones)
  }

}
