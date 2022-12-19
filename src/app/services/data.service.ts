import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

// currentacno
currentphno=''

// currentuser
currentuser=''


//saveDetails() - to store data into the local storage
saveDetails(){
  if(this.userDetails){
    localStorage.setItem('database',JSON.stringify(this.userDetails))
  }
  if(this.currentphno){
    localStorage.setItem('currentAcno',JSON.stringify(this.currentphno))
  }
  if(this.currentuser){
    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
  }
}


getDetails(){
  if(this.userDetails){
    this.userDetails=JSON.parse(localStorage.getItem('database')||'')
  }
  if(this.currentphno){
    this.currentphno=JSON.parse(localStorage.getItem('currentphno')||'')
  }
  if(this.currentuser){
    this.currentuser=JSON.parse(localStorage.getItem('currentuser')||'')
  }
}




  userDetails:any={
    1000:{phno:9090,username:'manu',pswd:'1000',todo:[]},
    1001:{phno:1001,username:'sayyid',pswd:'1001',todo:[]},
    1002:{phno:1002,username:'abhi',pswd:'1002',todo:[]}
  }
  //////////////////////////

  register(phno:any,username:any,pswd:any){
    let userDetails=this.userDetails;
    if(phno in userDetails){
      return false;
    }
    else{
      userDetails[phno]={
        phno:phno,
        username:username,
        pswd:pswd,
         todo:[]
      }
      console.log(userDetails);
      this.saveDetails();
      return true;
      
    }
  }

  ////////////////////////

  login(phno:any,pswd:any){
    if(phno in this.userDetails){
      if(pswd==this.userDetails[phno]['pswd']){
        this.currentuser=this.userDetails[phno]['username']
        this.currentphno=phno;
        this.saveDetails();
        return true
      }
      else{
        return false
      }
    
    }
    else{
      return false
    }

  }


///////
subtodo(phno:any,todo1:any,desc1:any)
{
  let userDetails=this.userDetails
  // var amount=parseInt(amt)
      // userDetails[phno]['balance']+=amount;
      var todo=todo1 ;
      var desc = desc1
      if (phno in userDetails) {
        userDetails[phno]['todo'].push({//push values to transaction array
          Todo:todo,
          Description:desc//the Type name and amount name is refered in *ngFor
        })
        

      }

      else{
        alert('invalid fon number')
        return false;
      }
      console.log(userDetails);//to check whether the data is disolaying
      this.saveDetails();
      return userDetails[phno]['todo']  
}

gettodo(phno:any){//acno arde ano ayalde acnt details kitnm

  return  this.userDetails[phno]['todo']

  }
}
  
  