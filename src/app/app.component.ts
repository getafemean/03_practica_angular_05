import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleText: string = 'Iniciar sesión';
  buttonText: string = 'Enviar';
  isLogin: boolean = true;

  changeAuth() {
    this.isLogin = !this.isLogin;
    if(this.isLogin) {
      this.titleText = 'Iniciar sesión';
      this.buttonText = 'Enviar';
    } else {
      this.titleText = 'Crear usuario';
      this.buttonText = 'Añadir';
    }
  }


}
