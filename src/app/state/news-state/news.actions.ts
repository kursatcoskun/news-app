import { Action } from '@ngrx/store';
import { News } from '../../models/news';
import { Update } from '@ngrx/entity';
import { NewsInput } from 'src/app/models/news-input';

export enum NewsActionTypes {
    LOAD_NEWS = '[News] Load News',
    LOAD_NEWS_SUCCESS = '[News] Load News Success',
    LOAD_NEWS_FAIL = '[News] Load News Fail'
}


export class LoadNews implements Action {
    readonly type = NewsActionTypes.LOAD_NEWS;
    constructor(public payload: NewsInput) {}
}

export class LoadNewsSuccess implements Action {
    readonly type = NewsActionTypes.LOAD_NEWS_SUCCESS;
    constructor(public payload: News) {}
}

export class LoadNewsFail implements Action {
    readonly type = NewsActionTypes.LOAD_NEWS_FAIL;
    constructor(public payload: string) {}
}

export type Action = LoadNews | LoadNewsSuccess | LoadNewsFail;


