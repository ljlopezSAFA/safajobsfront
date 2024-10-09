import {Component} from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet, IonSplitPane} from '@ionic/angular/standalone';
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuInferiorComponent} from "./menu-inferior/menu-inferior.component";
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, NavbarComponent, MenuInferiorComponent],
})
export class AppComponent {
  constructor() {}
}
