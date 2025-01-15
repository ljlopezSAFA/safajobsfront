import {Component, OnInit} from '@angular/core';
import {addIcons} from "ionicons";
import {briefcaseOutline, bulbOutline, exitOutline, gridOutline, menuOutline, peopleOutline} from "ionicons/icons";
import {Router, RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule
  ]
})
export class NavbarComponent  implements OnInit {

  constructor(private router:Router, private loginService:LoginService) {
    addIcons({menuOutline, gridOutline, briefcaseOutline, peopleOutline,bulbOutline,exitOutline})
  }

  ngOnInit() {}


  doLogout(){
    sessionStorage.clear();
    this.loginService.setAuthState(false);
    this.router.navigate(['/login']);

  }

}
