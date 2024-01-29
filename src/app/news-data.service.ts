// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _newsUrl: string = 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=22a7f377eefe4f528a5017ab3cfa3bc5';

  constructor(private http: HttpClient) {}

  getNewsData(): Observable<INews> {
    return this.http.get<INews>(this._newsUrl);
  }
}
