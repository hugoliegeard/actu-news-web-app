import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {PostComponent} from "../post/post.component";
import {Post} from "../shared/models/post";
import {PostService} from "../services/api/post.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private modalCtrl: ModalController,
              private postService: PostService) {}

  title: string = 'Actunews';
  posts:Post[] = [];
  featuredPost: Post|undefined;

  politicPosts:Post[] = [];
  featuredPoliticPost: Post|undefined;

  ecoPosts:Post[] = [];
  featuredEcoPost: Post|undefined;

  /**
   *
   */
  ngOnInit(): void {

    // Récupération des articles à la une
    this.postService.getPosts().subscribe(data => {

      // Vérification dans la console
      console.log( data );

      // Affectation des articles de l'API
      this.posts = data["hydra:member"];
      this.featuredPost = this.posts.shift();

    });

    // Récupération des articles "Politique"
    this.postService.getPostsByCategory(1).subscribe(data => {
      // Affectation des articles de l'API
      this.politicPosts = data["hydra:member"];
      this.featuredPoliticPost = this.politicPosts.shift();
    });


    // Récupération des articles "Economie"
    this.postService.getPostsByCategory(2).subscribe(data => {
      // Affectation des articles de l'API
      this.ecoPosts = data["hydra:member"];
      this.featuredEcoPost = this.ecoPosts.shift();
    });

  }

  /**
   * Permet d'afficher la modal de l'article
   */
  async displayPost(post : Post) {
    const modal = await this.modalCtrl.create({
      component: PostComponent,
      componentProps: {
        post
      }
    });
    await modal.present();
  }

}
