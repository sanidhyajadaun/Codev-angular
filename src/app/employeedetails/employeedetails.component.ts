// employeedetails.component.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  template: `
    <div class="employee-details-container">
      <h2>Employee Details</h2>
      <div *ngFor="let employee of employees" class="employee-card">

        <div class="employee-info">
          <div class="info-label">Name:</div>
          <div class="info-value">{{ employee.name }}</div>
        </div>

        <div class="employee-info">
          <div class="info-label">Email:</div>
          <div class="info-value">{{ employee.email }}</div>
        </div>

        <div class="employee-info">
          <div class="info-label">Phone:</div>
          <div class="info-value">{{ employee.phone }}</div>
        </div>

        <div class="employee-info">
          <div class="info-label">Team:</div>
          <div class="info-value">{{ employee.team }}</div>
        </div>

        <div class="employee-info">
          <div class="info-label">Employment Type:</div>
          <div class="info-value">{{ employee.type }}</div>
        </div>

        <div class="employee-info">
          <div class="info-label">Timing:</div>
          <div class="info-value">{{ employee.employeetiming }}</div>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent {
  public employees: { name:string; email:string; phone:number; team:string; type:string; employeetiming:string}[] = []; // Define the type

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(){
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
  }
}
