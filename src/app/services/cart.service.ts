import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL , PUBLIC_URL } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items:any=[]; //array

  constructor(public http:HttpClient) {
    this.items = localStorage.getItem("shopping_cart")?JSON.parse(localStorage.getItem("shopping_cart")):[];
   }

  getSelf(){
    return this;
  }

  getItems(){
    return this.items;
  }

  getItemIDs(){
    let ids=[];
    this.items.forEach (item => {
      let id = item.id;
      let qty = item.qty;
      ids.push({product_id:id,qty:qty});
    });
    return ids;
  }

  getTotalAmount(){
    let total = 0;
    this.items.forEach(item=> {
      total +=(item.price * item.qty);
    });
    return total;
  }

  getTotalCount(){
    return this.items.length;
  }

  save(){
    if(this.items.length >0){
       localStorage.setItem("shopping_cart",JSON.stringify(this.items));
    }
  }

  add(item:any){
    //check if there are existing item in a cart
    if(this.items.length>0){
      //if the same item is in the cart
      let existingItemIndex = null;
      this.items.map((cItem,i)=>{
        if(item.id == cItem.id){
          existingItemIndex = i;
        }
      });

      //if same item already in cart
      if(existingItemIndex!=null){
        this.items[existingItemIndex].qty +=1;
      }else{
        item.qty = 1;
        this.items.push(item);
      }
    }else{ //if there are no existing item
       item.qty = 1;
       this.items.push(item);
    }
    //persist to localStorage
    this.save();
    return;
  }

  update(item,mode){
    let indexToUpdate = null; 
    
    this.items.map((currentItems,index)=>{
      if(currentItems.id == item.id){
        indexToUpdate = index;
      }
    });

    //Check for mode :m->minus, p->plus
    if(mode == "m"){
      this.items[indexToUpdate].qty -=1;
    }else if(mode =="p"){
      this.items[indexToUpdate].qty +=1;
    }
    //check if the qty is 0 or not
    if(this.items[indexToUpdate].qty<=0){
     this.items.splice(indexToUpdate,1);
    }
    //persist to localStorage
    this.save();
    return;
  }

  remove(item:any){
    let indexToDelete = null;
    this.items.map((currentItem,index)=>{
      if(currentItem.id == item.id){
        indexToDelete = index;
      }
    });

    if(indexToDelete!= null){
      this.items.splice(indexToDelete,1);
    }

    //persist to localStorage
    this.save();
    return;
  }

  clear(){
    this.items = [];
    this.save();
  }
  

}
