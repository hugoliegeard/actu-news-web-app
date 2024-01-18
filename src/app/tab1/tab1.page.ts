import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {}

  title: string = 'Actunews';

  /**
   * Permet d'afficher la modal de l'article
   */
  async displayPost() {
    const modal = await this.modalCtrl.create({
      component: PostComponent,
    });
    await modal.present();
  }

}
