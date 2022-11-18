import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform : FormGroup;

  constructor(private formBuilder:FormBuilder, private http : HttpClient,private router:Router ) {}

  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }
  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupform.value)
    .subscribe(res=>{
      alert("SignUp Successfull");
      this.signupform.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong");
    })

  }

}
