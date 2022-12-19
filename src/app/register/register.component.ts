import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({  
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  })
  constructor(private ds:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // alert('clicked register')
    console.log('registerForm');
    
    var uname=this.registerForm.value.uname;
    var email=this.registerForm.value.email;
    var pswd=this.registerForm.value.pswd;
    if(this.registerForm.valid){
      // console.log(this.registerForm.get('uname')?.errors);
      
    const result=this.ds.register(uname,email,pswd);
    
    if (result) {
        alert('register successfull')
        this.router.navigateByUrl('')
    }
    else{
      alert('register failed')
      this.router.navigateByUrl('register')
    }
  }else{
    alert('invalid form')
  }
  }
}
