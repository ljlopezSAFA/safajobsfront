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
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Registro} from "../modelos/Registro";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class AuthComponent implements OnInit {

  registroForm: FormGroup;
  loginForm: FormGroup;
  login: Login = new Login();
  registro: Registro = new Registro();
  loginViewFlag: boolean = true;

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    addIcons({
      personOutline, keyOutline,
      textOutline, mailOutline, idCard, idCardOutline,
      text, personCircle, personCircleOutline
    })

    this.registroForm = this.fb.group({
      nombre: [this.registro.nombre, Validators.required],
      apellidos: [this.registro.apellidos, Validators.required],
      mail: [this.registro.mail, [Validators.required, Validators.email]],
      fechaNacimiento: [this.registro.fechaNacimiento, Validators.required],
      dni: [this.registro.dni, Validators.required],
      username: [this.registro.username, Validators.required],
      password: [this.registro.password, Validators.required],
    });

    this.loginForm = this.fb.group({
      username: [this.login.username, Validators.required],
      password: [this.login.password, Validators.required],
    });


  }

  ngOnInit() {
  }


  doLogin(): void {

    if (this.loginForm.valid) {
      this.login = {...this.login, ...this.loginForm.value};
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


    } else {
      console.log('Formulario inválido. Por favor verifica los datos.');
    }

  }

  doRegister() {
    if (this.registroForm.valid) {
      this.registro = {...this.registro, ...this.registroForm.value};
      console.log('Registro exitoso:', this.registro);
    } else {
      console.log('Formulario inválido. Por favor verifica los datos.');
    }
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
