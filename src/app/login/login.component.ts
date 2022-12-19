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
    phno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  login(){
    //alert login clicked
    var phno=this.loginForm.value.phno;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
   
    if(this.loginForm.valid){
      console.log(this.loginForm.get('phno')?.errors);
       const result=this.ds.login(phno,pswd)
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
