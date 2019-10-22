import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiNewsService {
  
  API_KEY:string ="e06f5b3da2be4501af757078cf03a985";
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get<Config>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.API_KEY}`);
  }
}

export interface Config {
  heroesUrl: string;
  textfile: string;
}