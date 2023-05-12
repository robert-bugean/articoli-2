import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { deleteArticle } from './actions';
import { AppState } from './app.state';

const initialState: AppState = {
  articles: [],
};

export const appReducer = createReducer(
  initialState,
  on(deleteArticle, (state, { id }) => ({
    ...state,
    articles: [...state.articles.slice(getIndex(id), 1)]
  }))
);

export const getArticlesState = createFeatureSelector<AppState>('app');

export const getArticles = createSelector(
  getArticlesState,
  (state: AppState) => state.articles
)



function getIndex(id: number) {
  let index = initialState.articles.findIndex(article => article.id === id);
  return index;
}