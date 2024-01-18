import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class ApiService {

  apiEndpoint:string = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  get(uri: string): Observable<any> {
    return this.http.get(this.apiEndpoint + uri);
  }

}
