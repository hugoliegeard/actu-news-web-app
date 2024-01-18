import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Post} from "../shared/models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent  implements OnInit {

  @Input() post: Post|undefined;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  /**
   * Déclenche la fermeture de la modal
   */
  async dismissModal() {
    await this.modalCtrl.dismiss();
  }

}
