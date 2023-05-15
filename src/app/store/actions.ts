import { Article } from "./article";
import { createAction, props } from "@ngrx/store";


export const loadArticle = createAction('[Article] get all');
export const loadArticleSuccess = createAction('[Article] get all success', props<{payload : Article[]}>());

export const deleteArticle = createAction('[Article-Delete] delete article', props<{ id: number }>())

// createArticle rappresenta l'intenzione dell'utente di aggiungere un nuovo articolo
export const createArticle = createAction('[Article] Create Article', props<{article : Article}>());
// createArticle rappresenta l'azione da inviare quando un nuovo articolo è stato aggiunto (aggiunta effettiva)
export const createArticleSuccess = createAction('[Article] Create Article Success', props<{article : Article}>())


