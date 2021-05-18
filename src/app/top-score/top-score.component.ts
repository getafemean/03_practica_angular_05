import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.scss']
})
export class TopScoreComponent implements OnInit {

  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;
  jugadores: any = [];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores];
  }

  ngAfterContentChecked() {
    this.sortJugadores();
  }

  sortJugadores() {
    this.jugadores.sort((a, b) => {
      return (b.puntos - a.puntos)
    })
  }
}
