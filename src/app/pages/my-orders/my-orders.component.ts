import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders:any;
  loading:Boolean = true;
  constructor(private cartSvc: CartService) { }

  ngOnInit() {
    this.cartSvc.getMyOrders().toPromise().then((res:any)=>{
      if(res.orders){
        this.orders = res.orders;
      }
      this.loading = false;
    })
    .catch((err:any)=>{
      this.loading = false;
      alert('Error fetching my orders');
    });
  }

}
