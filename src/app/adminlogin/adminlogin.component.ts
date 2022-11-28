import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""

  readValues=()=>{
    let data = {"username":this.username, "password":this.password}
    console.log(data)
  }

}
