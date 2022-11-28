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
      "designation":"Software Engineer",
      "email":"abhiraj@gmail.com",
      "phone":"98562147856",
      "salary":25000
    },
    {
      "name":"alex",
      "designation":"Software Engineer",
      "email":"alex@gmail.com",
      "phone":"98562147856",
      "salary":26000
    },
    {
      "name":"mike",
      "designation":"Software Engineer",
      "email":"mike@gmail.com",
      "phone":"9856217856",
      "salary":30000
    },
    {
      "name":"Anil",
      "designation":"Software Engineer",
      "email":"anil@gmail.com",
      "phone":"98562147856",
      "salary":27000
    },
    {
      "name":"david",
      "designation":"Software Engineer",
      "email":"david@gmail.com",
      "phone":"98562147856",
      "salary":26000
    }
  ]

}
