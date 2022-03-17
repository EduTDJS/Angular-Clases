import { Component } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personas: Persona[] = []
  title = 'class_4';

  constructor(){
    this.personas = [
     {
       id:1,
       "nombre": "Eduardo De Jesus",
       "titulo": "Estudiante de Angular",
       "bio": "Con muchas ganas de aprender",
     } 
    ]
  }
}
