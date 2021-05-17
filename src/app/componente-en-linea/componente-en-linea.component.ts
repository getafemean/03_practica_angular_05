import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
    <div class="card">
      <h1>Ejemplo de componente en línea</h1>
      <p>Hola mundo!</p>
    </div>
  `,
  styles: [
    'h1 {color: violet}','p {color: blue}'
  ]
})

export class ComponenteEnLineaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
