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
    this.setlocal(this.transacciones);
  }

  public getTransacciones(){
    return this.transacciones;
  }

  private setlocal(transacciones: Transaccion[]){
    localStorage.setItem('transacciones', JSON.stringify(transacciones))
  }

  private getlocal(){
    const trans = localStorage.getItem("transacciones")
    if (trans){
      return JSON.parse(trans) as Transaccion[];
    } else {
    this.setlocal([])
    return [];
    }
  }

}
