import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({  
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
    //alert login clicked
    var uname=this.loginForm.value.uname;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
   
    if(this.loginForm.valid){
      console.log(this.loginForm.get('uname')?.errors);
       const result=this.ds.login(uname,pswd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert("login failed")
    }
  }else{
    alert('invalid form')
  }
}
}
