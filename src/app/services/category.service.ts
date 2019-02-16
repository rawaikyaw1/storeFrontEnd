import { Injectable } from '@angular/core';
import {API_URL , PUBLIC_URL } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(){    
    return this.http.get(API_URL+"/categories");
  }

}
