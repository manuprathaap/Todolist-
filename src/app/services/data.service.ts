import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // currentacno
currentuname=''

// currentuser
currentuser=''


//saveDetails() - to store data into the local storage
// saveDetails(){
//   if(this.userDetails){
//     localStorage.setItem('database',JSON.stringify(this.userDetails))
//   }
//   if(this.currentAcno){
//     localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
//   }
//   if(this.currentuser){
//     localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
//   }
// }


// getDetails(){
//   if(this.userDetails){
//     this.userDetails=JSON.parse(localStorage.getItem('database')||'')
//   }
//   if(this.currentAcno){
//     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||'')
//   }
//   if(this.currentuser){
//     this.currentuser=JSON.parse(localStorage.getItem('currentuser')||'')
//   }
// }




  userDetails:any={
    1000:{username:'manu', email:'manu@2000', pswd:'1000'},
    1001:{username:'anu', email:'anu@2000', pswd:'1001'},
    1002:{username:'binu', email:'binu@2000', pswd:'1002'},
  }
  //////////////////////////

  register(username:any,email:any,pswd:any){
    let userDetails=this.userDetails;
    if(username in userDetails){
      return false;
    }
    else{
      userDetails[username]={
        username:username,
        email:email,
        pswd:pswd
        
      }
      console.log(userDetails);
      // this.saveDetails();
      return true;
      
    }
  }

  ////////////////////////

  login(username:any,pswd:any){
    if(username in this.userDetails){
      if(pswd==this.userDetails[username]['pswd']){
        this.currentuser=this.userDetails[username]['email']
        this.currentuname=username;
        // this.saveDetails();
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
}
