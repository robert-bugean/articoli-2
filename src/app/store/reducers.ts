import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AppState } from "./app.state";
import { loadArticleSuccess } from './actions';

const initialState: AppState = {
  articles: [],
};

export const appReducer = createReducer(
    initialState,
    on(loadArticleSuccess, (state, { payload }) => ({
      ...state,
      articles: payload,
    }))
    // 
)




//selectors
export const getArticleState = createFeatureSelector<AppState>('app');

export const getArticles = createSelector(
    getArticleState, 
    (state: AppState) => state.articles 
);