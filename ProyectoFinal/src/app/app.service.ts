import { Injectable } from '@angular/core';
import { Transaccion } from './models/Transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private transacciones: Transaccion[] = [];
  constructor() { }

  public addTransaccion(tran: Transaccion){
    this.transacciones.push(tran);
  }

  public getTransacciones(){
    return this.transacciones;
  }
}
