import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name=""
  email=""
  phone=""
  salary=""
  designation=""

  readValue=()=>
  {
    let data={
      "name":this.name,
      "designation":this.designation,
      "email":this.email,
      "phone":this.phone,
      "salary":this.salary
    }

    console.log(data)

  }

}
