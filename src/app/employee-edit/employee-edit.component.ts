import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  
  empcode=""

  readValues=()=>{
    let data = {"empcode":this.empcode}
    console.log(data)
  }

}
