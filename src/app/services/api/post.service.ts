import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {PostResponse} from "../../shared/models/post.response";

@Injectable({
  providedIn: 'any'
})
export class PostService {

  constructor(private api: ApiService) { }

  /**
   * Récupération des articles de la base
   */
  getPosts(): Observable<PostResponse> {
    return this.api.get('/api/posts');
  }

  /**
   * Récupération des articles de la base
   */
  getPostsByCategory(id: number): Observable<PostResponse> {
    return this.api.get('/api/posts?category='+id);
  }

}
