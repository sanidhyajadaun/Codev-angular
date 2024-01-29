// news.component.ts

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news-data.service';
import { INews } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: INews | null = null;

  constructor(private _newsService: NewsService) {}

  ngOnInit() {
    this._newsService.getNewsData().subscribe((data: INews) => {
      this.news = data;
    });
  }
}
