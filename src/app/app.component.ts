import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuInferiorComponent} from "./menu-inferior/menu-inferior.component";
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, NavbarComponent, MenuInferiorComponent, CommonModule],
})
export class AppComponent {
  showMenuInferior: boolean = true; // Controla si se muestra el menú

  constructor(private router: Router, private loginService:LoginService) {}

  ngOnInit() {
    this.loginService.authState$.subscribe((isAuthenticated) => {
      this.showMenuInferior = isAuthenticated;

      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });
  }
}
