import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL , PUBLIC_URL } from '../../environments/environment';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

   //obj to string
   serialize(obj){
    var str=[];
    for(var p in obj)
      if(obj.hasOwnProperty(p)){
        str.push(encodeURIComponent(p) + "="+ encodeURIComponent(obj[p]));
      }
      return str.join("&");

  }

  getAll(query={}){ 
    let qstr= this.serialize(query);   
    let url = API_URL+"/products?"+qstr;
    console.log(url);
    return this.http.get(url,httpOptions);
  }

  getURL(img_name){
    return PUBLIC_URL+"uploads/products/"+img_name;
  }


}
