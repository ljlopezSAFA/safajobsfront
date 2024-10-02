import {Component} from '@angular/core';
import {IonApp, IonContent, IonRouterOutlet, IonSplitPane} from '@ionic/angular/standalone';
import {NavbarComponent} from "./navbar/navbar.component";
import {MenuInferiorComponent} from "./menu-inferior/menu-inferior.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, NavbarComponent, IonContent, IonSplitPane, MenuInferiorComponent],
})
export class AppComponent {
  constructor() {}
}
