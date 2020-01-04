import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';
import { Store, select } from '@ngrx/store';
import * as newsActions from '../../state/news-state/news.actions';
import * as fromNews from '../../state/news-state/news.reducer';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: any;
  newsUpdated: any;
  extData: any;
  // news$: Observable<News[]>;
  error$: Observable<String>;
  constructor(private dataService: DataService, private router: Router, private store: Store<fromNews.AppState>) { }

  ngOnInit() {
    this.news = this.store.pipe(select(fromNews.getNews));
    this.newsUpdated = this.news.actionsObserver._value.payload;
    this.error$ = this.store.pipe(select(fromNews.getNewError));
    console.log(this.newsUpdated);
    if (this.newsUpdated !== undefined) {
      if (this.newsUpdated.status !== 'ok') {
        this.router.navigateByUrl('/home');
      }
    }
    else {
      this.router.navigateByUrl('/home');
    }
  }

}
