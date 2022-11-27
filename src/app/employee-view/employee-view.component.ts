import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  data =[
    {
      "name":"abhiraj",
      "email":"abhiraj@gmail.com",
      "phone":"98562147856",
      "salary":25000
    },
    {
      "name":"alex",
      "email":"alex@gmail.com",
      "phone":"98562147856",
      "salary":26000
    },
    {
      "name":"mike",
      "email":"mike@gmail.com",
      "phone":"9856217856",
      "salary":30000
    },
    {
      "name":"Anil",
      "email":"anil@gmail.com",
      "phone":"98562147856",
      "salary":27000
    },
    {
      "name":"david",
      "email":"david@gmail.com",
      "phone":"98562147856",
      "salary":26000
    }
  ]

}
