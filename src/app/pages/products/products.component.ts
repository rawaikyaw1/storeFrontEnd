import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';
declare var require:any;
var toastr = require('toastr');

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public cats:any;
  public products:any;
  public category:any;
  public id:any;

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

  filterByCategory(id,name){
    this.category = name;
    this.prodSvc.getAll({category:id}).subscribe((res:any)=>{
      this.products = res.data;
    },
    (err)=>{
      console.log(err);
    });
  }

  addToCart(product){
    console.log(product);
    this.cartSvc.add(product);
    toastr.warning('Successfully added to the cart.');
  }

}
