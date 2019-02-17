import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  user:any = {};
  payment_method:any;
  constructor(public cartSvc: CartService,
      public authSvc: AuthService,
      public router: Router
    ) { }

  ngOnInit() {
    this.authSvc.getProfile().subscribe((res:any)=>{
      if(res.user){
        this.user = res.user;
        this.user.password="";
      }
    });
  }

  onConfirmCheckout(){
    console.log('Check Out Data');
    let formData = {
      phone: this.user.phone,
      address: this.user.address,
      city: this.user.city,
      payment_method: this.payment_method,
      total_amount: this.cartSvc.getTotalAmount(),
      items: this.cartSvc.getItemIDs()
    }

    // console.log(formData.total_amount);

    this.cartSvc.submitOrder(formData).subscribe((res:any)=>{
      console.log(res);

      if(res.order){
        //clear shopping cart
        this.cartSvc.clear();
        //redirect to thank you.
        this.router.navigate(['thankyou']);
      }
    })

  };

}
