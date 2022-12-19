import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
   //curent user
   user=''

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentuser;
   }
   logout(){
    alert("clicked")
    localStorage.removeItem('currentphno');
    localStorage.removeItem('currentuser');
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
  }

}
