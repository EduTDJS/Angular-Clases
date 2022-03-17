import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  @Input()
  nombre: string = '';
  @Input()
  titulo: string = '';
  @Input()
  bio: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
