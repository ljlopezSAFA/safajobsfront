import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Aptitud} from "../modelos/Aptitud";
import {AptitudesService} from "../services/aptitudes.service";
import {CommonModule} from "@angular/common";
import {flame} from "ionicons/icons";

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class AptitudesComponent implements OnInit {

  aptitudes: Aptitud[] = [];


  constructor(private service: AptitudesService) {
  }

  ngOnInit() {
    this.service.getAptitudes().subscribe({
      next: (json) => {
        this.aptitudes = json;
        console.info(json);
      },
      error: (e) => console.error(e),
      complete: () => console.info("petición enviada")
    });
  }

  esPar(id?: number):boolean{
    if(id){
      return id %2 ==0;
    }else{
      return false;
    }

  }



}
