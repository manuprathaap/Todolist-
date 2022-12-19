import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  phno:any
todo:any
btnVal="Submit";

  constructor(private ds:DataService, private router:Router) { 
    this.phno=this.ds.currentphno;
    this.todo=this.ds.gettodo(this.phno)
    console.log(this.todo);


  }

  ngOnInit(): void {
  }
  submit()
  {
    alert("Completed");
    this.btnVal = "Completed"
    
  }
  home(){
    this.router.navigateByUrl('dashboard')
  }

}
