import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var require:any;
var toastr = require('toastr');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any = {};
  
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  onloginFormSubmit(form){
    console.log(form);
    if(!form.valid){
      alert('Form validation errors');
    }

    console.log('hello');

    this.authSvc.login(this.user).subscribe(
      (res:any)=>{
        if(res.user && res.token){
          this.authSvc.saveUser(res.user,res.token);

          window.location.href = "/";
          // console.log(res.token);
          // window.location.href = "/";
        }
      },
      (res:any)=>{
        if(res.error){
          console.log(res.error);
          toastr.warning(res.error.message.message);
        }
      }
    )

  }

}
