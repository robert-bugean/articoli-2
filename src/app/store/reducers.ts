import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { AppState } from "./app.state";

import { createArticle, loadArticleSuccess } from './actions';
import { deleteArticle } from './actions';
import { state } from '@angular/animations';

const initialState: AppState = {
  articles: [],
};

export const appReducer = createReducer(
    initialState,
    on(loadArticleSuccess, (state, { payload }) => ({
      ...state,
      articles: payload,
    })),
    on(deleteArticle, (state, { id }) => ({
      ...state,
      articles: [...state.articles.slice(getIndex(id), 1)]
    })),
    on(createArticle, (state, { article }) => ({
      ...state,
      articles: [...state.articles, article],
    })),
)

export const getArticleState = createFeatureSelector<AppState>('app');

export const getArticles = createSelector(
    getArticleState, 
    (state: AppState) => state.articles 
);


function getIndex(id: number) {
  let index = initialState.articles.findIndex(article => article.id === id);
  return index;
}