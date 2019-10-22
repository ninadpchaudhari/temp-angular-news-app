import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../api-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;
  constructor(private newsApi: ApiNewsService) { }
  ngOnInit() {
    this.newsApi.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data['articles'];
    })
  }

  //Some other function here..

}
