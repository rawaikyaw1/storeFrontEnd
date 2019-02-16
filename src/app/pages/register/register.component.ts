import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var require:any;
var toastr = require('toastr');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:any = {};
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  onSignupFormSubmit(form){
    if(!form.valid){
      alert('Form validation errors');
    }

    this.authSvc.register(this.user).subscribe(
      (res:any)=>{
        if(res.user){
          window.location.href = "/";
        }else{
          toastr.warning(res.message);
        }
      },
      (res:any)=>{
        if(res.error){
          console.log(res.error);
          toastr.warning(res.error.message.message);
        }
      }
    );

  }

  

}
