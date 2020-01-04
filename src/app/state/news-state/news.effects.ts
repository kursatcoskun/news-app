import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NewsService } from 'src/services/news.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as newsActions from '../news-state/news.actions';
import {map, mergeMap, catchError } from 'rxjs/operators';
import { News } from 'src/app/models/news';

@Injectable()
export class NewsEffects {
    constructor(private actions$: Actions, private newsService: NewsService) { }


@Effect()
loadNews$: Observable<Action> = this.actions$.pipe(
    ofType<newsActions.LoadNews>(
        newsActions.NewsActionTypes.LOAD_NEWS
    ),
    mergeMap((action: newsActions.LoadNews) =>
        this.newsService.getNewsByHeaderName(action.payload).pipe(
            map(
                (news: News) =>
                new newsActions.LoadNewsSuccess(news)
            ),
            catchError(err => of(new newsActions.LoadNewsFail(err)))
        )
    )
);

            }