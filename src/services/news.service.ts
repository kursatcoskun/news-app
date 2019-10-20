import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = '6833ba8c92714b6e9a5f058afe51d071';

constructor(private http: HttpClient) {
}



getNewsByHeaderName(name,date): Observable<any> {
  return this.http.get<any>('https://newsapi.org/v2/everything?q=' + name + '&from=' + date + '&sortBy=publishedAt&apiKey=' + this.apiKey);
}


}
