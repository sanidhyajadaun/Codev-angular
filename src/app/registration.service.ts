// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { User } from './user';
// import { catchError } from 'rxjs';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegistrationService {

//   _url = 'https://localhost:3000/enroll';
//   constructor(private _http: HttpClient) { }

//   register(userData: any){
//     return this._http.post<any>(this._url,userData)
//     .pipe(catchError(this.errorHandler));
//   }

//   errorHandler(error:HttpErrorResponse){
//     return throwError(error);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  getParsedData(): any[] {
    throw new Error('Method not implemented.');
  }
  private _url = 'http://localhost:3000/enroll';  // Update the URL with your server's correct address

  constructor(private _http: HttpClient) { }

  register(userData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.post<any>(this._url, userData, { headers })
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
