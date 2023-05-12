import { createAction, props } from "@ngrx/store";
import { Article } from "./article";


export const loadArticle = createAction('[Article] get all');
export const loadArticleSuccess = createAction('[Article] get all', props<{payload : Article[]}>());
