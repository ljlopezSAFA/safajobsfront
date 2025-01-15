import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {keyOutline, personOutline} from "ionicons/icons";
import {PublicacionCrear} from "../modelos/PublicacionCrear";
import {Login} from "../modelos/Login";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private loginService: LoginService, private router: Router) {
    addIcons({personOutline, keyOutline})
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
      complete: ()=> this.router.navigate([''])
    })
  }

}
