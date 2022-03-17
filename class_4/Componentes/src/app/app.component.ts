import { Component } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personas: Persona[] = []
  public condicionSW= 1;
  title = 'Componentes';

  constructor() {
    this.personas = [
      {
      "id": 1,
      "nombre": "Eduardo De Jesus",
      "titulo": "Estudiante",
      "bio": "Ganas de Aprender"
      },
      {
      "id": 2,
      "nombre": "Dangely Mendez",
      "titulo": "Abogada",
      "bio": "Novia del que aprende",
      }
    ]
  }
}
