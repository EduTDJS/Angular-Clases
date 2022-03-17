import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  @Input()
  persona: Persona = {
    id:0,
    titulo: '',
    nombre: '',
    bio: ''
  }

  @Output()
  public onBorrar: EventEmitter<Persona> = new EventEmitter<Persona>();

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.onBorrar.emit(this.persona);
  }

}
