import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartSvc: CartService, public prodSvc: ProductsServiceService) { }

  ngOnInit() {
  }

  updateQtyCart(item, mode){
    this.cartSvc.update(item,mode);
  }

  removeItemCart(item){
    this.cartSvc.remove(item);
  }

}
