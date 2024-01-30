import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../Interfaces/employee';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  // enroll(user:User){
  //   return this.http.post<any>(this._url,user);
  // }
}
