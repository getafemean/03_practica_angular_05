import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {

  equipoLocal: any = {
    nombre: 'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores: [
      {nombre: 'Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png'},
      {nombre: 'Kyle Kuzma', puntos: 0, imagen: '/assets/img/kuzma.png'},
      {nombre: 'Julius Randle', puntos: 0, imagen: '/assets/img/randle.png'},
      {nombre: 'Brandom Ingram', puntos: 0, imagen: '/assets/img/ingram.png'},
      {nombre: 'Brook López', puntos: 0, imagen: '/assets/img/lopez.png'},
    ]
  }

  equipoVisitante: any = {
    nombre: 'celtics',
    logo: '/assets/img/BOS.svg',
    jugadores: [
      {nombre: 'Kaadem Allen', puntos: 0, imagen: '/assets/img/allen.png'},
      {nombre: 'Aron Bynes', puntos: 0, imagen: '/assets/img/bynes.png'},
      {nombre: 'Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png'},
      {nombre: 'Jaylen Brown', puntos: 0, imagen: '/assets/img/brown.png'},
      {nombre: 'Jonathan Gibson', puntos: 0, imagen: '/assets/img/gibson.png'},
    ]
  }

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
