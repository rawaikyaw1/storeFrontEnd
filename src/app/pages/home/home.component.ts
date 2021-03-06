import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';
declare var require:any;
var toastr = require('toastr');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cats:any;
  public products:any;
  
  constructor(private prodSvc: ProductsServiceService, private catSvc: CategoryService, private cartSvc: CartService) { }

  ngOnInit() {

    this.catSvc.getAll().subscribe((res:any)=>{
      this.cats = res.data;
    });

    this.prodSvc.getAll().subscribe((res:any)=>{
      this.products = res.data; 
      // console.log(this.products);     
    },
    (err)=>{
      console.log(err);
    });   

  }

  filterByCategory(id, name) {
    console.log(id);
    console.log(name);
  }

  addToCart(product){
    console.log(product);
    this.cartSvc.add(product);
    toastr.success('Successfully added to the cart.');
  }

}
