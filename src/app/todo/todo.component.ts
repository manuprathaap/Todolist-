import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  user="";//to connect dataservice and dashboard for user  name displaying
  todo='';
  desc=""

  constructor(private router:Router, private ds:DataService ,private fb:FormBuilder ) {}
  depositForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    phno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    todo:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    desc:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  ngOnInit(): void {
  }
  subb(){
    var phno=this.depositForm.value.phno;
    var todo=this.depositForm.value.todo;
    var desc=this.depositForm.value.desc;
    const result=this.ds.subtodo(phno,todo,desc)
  
    if(result)
    {
      alert('SUBMITTED');
    }
    
    
  }
  home(){
    this.router.navigateByUrl('dashboard')
  }
}

