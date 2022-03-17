import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input()
  public personas: Persona[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  borrarPersona(persona:Persona) {
    alert("Carta Borrada")
  }

}
