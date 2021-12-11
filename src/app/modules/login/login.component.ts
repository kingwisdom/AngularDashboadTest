import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//@ViewChild('f') loginForm: NgForm;
user = {
  username: '',
  email:''
}
public router: Router;
errorMsg : any

  constructor(router:Router, public toastr: ToastrService) { this.router = router;}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    //this.user.email = form.value.username;
    let adminUser = "admin"
    let adminPass = "admin"
    let un = form.value.username;
    let p = form.value.password;

    if(un !== adminUser && p !== adminPass){
      this.toastr.error("The Username / Password is incorrect");
      this.errorMsg = "The Username / Password is incorrect"
      return;
    }

    this.toastr.success("Login successfull");
    setTimeout(()=> {
      this.router.navigate(['/dashboard']);
    }, 1000)

    console.log(un,p)
  }
}
