import { Article } from "./article";
import { createAction, props } from "@ngrx/store";


export const loadArticle = createAction('[Article] get all');
export const loadArticleSuccess = createAction('[Article] get all', props<{payload : Article[]}>());

export const deleteArticle = createAction('[Article-Delete] delete article', props<{ id: number }>())
