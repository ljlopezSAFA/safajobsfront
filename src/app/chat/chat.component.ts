import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {paperPlaneOutline} from "ionicons/icons";
import {Router, RouterModule} from "@angular/router";
import {Chat} from "../modelos/Chat";
import {ChatService} from "../services/chat.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class ChatComponent implements OnInit {

  protected chats: Chat[] = [];

  constructor(private chatService: ChatService, private router: Router) {
    addIcons({paperPlaneOutline})
  }

  ngOnInit() {
    this.cargarChats();
  }


  cargarChats(): void {
    this.chatService.getChats().subscribe({
        next: (d) => {
          this.chats = d;
        },
        error: (e) => {
          console.error(e);
        },
        complete: () =>
          console.info(this.chats)

      }
    );

  }

  goToPersonalChat(idContacto: any) {
    this.chatService.setContactoId(idContacto);
    console.log(this.chatService.getContactoId());
    this.router.navigate(['personalchat'])

  }
}
