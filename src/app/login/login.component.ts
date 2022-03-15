import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm:FormGroup=new FormGroup({
  //   username:new FormControl(),
  //   password:new FormControl()

  // })
  // login()
  // {
  //   this.loginService.postlogindata(this.loginForm.value).subscribe(
  //     (data:any)=>{
  //       alert("posted success");
  //       localStorage.setItem("token",data.token);
  //       this.router.navigateByUrl("/dashboard")
  //     },
  //     (error:any)=>{
  //       alert("server down")
  //     }
  //     )
  // }


  constructor() { }
  ngOnInit(): void {
  }

}
