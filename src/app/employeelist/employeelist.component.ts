// employeelist.component.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employeelist',
  template: `
    <div class="employee-list-container">
      <h2>Employee List</h2>
      <ul>
        <li *ngFor="let employee of employees" class="employee-item">{{ employee.name }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./employeelist.component.css']
})

export class EmployeelistComponent {
  public employees: any[] = []; // Specify the type or initialize as an empty array
  constructor(private _employeeService: EmployeeService){ }
  ngOnInit(){
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }
}
