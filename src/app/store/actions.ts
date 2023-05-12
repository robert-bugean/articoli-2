import { createAction, props } from "@ngrx/store";


export const loadArticles = createAction('[Article-Delete] get all');
export const deleteArticle = createAction('[Article-Delete] delete article', props<{ id: number }>())