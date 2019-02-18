import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  public order:any = {};
  public items:any = [];
  loading:Boolean = true;
  constructor(private cartSvc: CartService) { }

  ngOnInit() {
    let url = window.location.href;
    let id = url.split("/").pop();

    this.cartSvc.getOrderDetails(id).subscribe((res:any)=>{
      if(res.order){
        this.order = res.order;
        this.items = res.items;
      }
      this.loading = false;
    });
  }

}
