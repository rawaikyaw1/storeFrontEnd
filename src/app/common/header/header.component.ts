import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public cartSvc:CartService,
    public auth:AuthService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  onLogout(e){
    var confm = confirm("Are you sure to logout?");
    if(confm){
      this.auth.logOut().subscribe(res=>{
        this.router.navigate(["/login"]);
      });
    }
  }

}
