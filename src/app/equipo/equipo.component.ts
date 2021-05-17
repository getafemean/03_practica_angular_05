import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  @Input() equipo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
