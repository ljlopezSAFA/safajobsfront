import {Component, OnInit} from '@angular/core';
import {Login} from "../modelos/Login";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {
  idCard,
  idCardOutline,
  keyOutline,
  mailOutline,
  personCircle, personCircleOutline,
  personOutline,
  text,
  textOutline
} from "ionicons/icons";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule
  ]
})
export class AuthComponent implements OnInit {

  login: Login = new Login();
  loginViewFlag: boolean = true;

  constructor(private loginService: LoginService, private router: Router) {
    addIcons({
      personOutline, keyOutline,
      textOutline, mailOutline, idCard, idCardOutline,
      text, personCircle, personCircleOutline
    })
  }

  ngOnInit() {
  }


  doLogin(): void {
    this.loginService.loguear(this.login).subscribe({
      next: (respuesta) => {
        const token = respuesta.token; // Accede al token
        sessionStorage.setItem("authToken", token);

        // Notificar sobre el cambio en el estado de autenticación
        this.loginService.setAuthState(true);

      },
      error: (e) => console.error(e),
      complete: () => this.router.navigate([''])
    })
  }


  goRegister() {
    this.loginViewFlag = false;
    this.ngOnInit()


  }

  goLogin() {
    this.loginViewFlag = true;
    this.ngOnInit()
  }

}
