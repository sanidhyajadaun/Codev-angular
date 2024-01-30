import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestapiService {
  private apiURL = "https://api.breakingbadquotes.xyz/v1/quotes/5";

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any>{
    return this.http.get<any>(this.apiURL);
  }
}
