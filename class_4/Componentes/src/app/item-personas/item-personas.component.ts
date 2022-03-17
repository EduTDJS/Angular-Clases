import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-item-personas',
  templateUrl: './item-personas.component.html',
  styleUrls: ['./item-personas.component.css']
})
export class ItemPersonasComponent implements OnInit {
  @Input()
  public persona: Persona = {id: 0, nombre: '', bio: '', titulo:''};

  constructor() { }

  ngOnInit(): void {
  }

}
