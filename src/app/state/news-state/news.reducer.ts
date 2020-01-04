import * as newsActions from './news.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { News } from 'src/app/models/news';
import * as fromRoot from '../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface NewsState extends EntityState<News> {
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    news: NewsState
}

export const newsAdapter: EntityAdapter<News> = createEntityAdapter<News>();

export const defaultNews: NewsState = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    error: ''
};

export const initialState = newsAdapter.getInitialState(defaultNews);

export function newsReducer(state = initialState, action: newsActions.Action): NewsState {
    switch (action.type) {
        case newsActions.NewsActionTypes.LOAD_NEWS_SUCCESS: {
            return newsAdapter.addOne(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case newsActions.NewsActionTypes.LOAD_NEWS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
}

const getNewsFeatureState = createFeatureSelector<NewsState>('news');

export const getNews = createSelector(
    getNewsFeatureState,
    newsAdapter.getSelectors().selectAll
);

export const getNewsLoading = createSelector(
    getNewsFeatureState,
    (state: NewsState) => state.loading
);

export const getNewsLoaded = createSelector(
    getNewsFeatureState,
    (state: NewsState) => state.loaded
);

export const getNewError = createSelector(
    getNewsFeatureState,
    (state: NewsState) => state.error
);
