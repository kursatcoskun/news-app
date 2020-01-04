import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';

const API_URL = 'https://newsapi.org/v2/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = '6833ba8c92714b6e9a5f058afe51d071';

constructor(private http: HttpClient) {
}

getNewsByHeaderName(payload: any): Observable<News> {
  return this.http.get<News>(API_URL + `everything?q=${payload.name}&from=${payload.date}&sortBy=publishedAt&apiKey=${this.apiKey}`);
}


}
