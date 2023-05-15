import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, tap, concatMap, throwError } from 'rxjs';
import { Article } from './article';
import { Store } from '@ngrx/store';

import { Injectable } from '@angular/core';
import { ArticleService } from '../service/article.service';
import {
  createArticle,
  createArticleSuccess,
  editArticle,
  editArticleSuccess,
  loadArticle,
  loadArticleSuccess,
} from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private store: Store
  ) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      switchMap(() =>
        this.articleService
          .getAllArticles()
          .pipe(map((data: Article[]) => loadArticleSuccess({ payload: data })))
      )
    )
  );

  createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticle),
      // prende gli articoli più recenti dalla lista
      switchMap((action) =>
        // converte il metodo insertArticle in observable
        this.articleService.insertArticle(action.article).pipe(
          // prende il valore di ritorno e ritorna una nuova azione createArticleSuccess
          map((article) => createArticleSuccess({ article: article })),
          catchError((error) => {
            const errorMessage = 'Errore di rete: durante l\'inserimento dell\'articolo';
            return throwError(errorMessage);
          })
        )
      )
    ),
  );


  editArticle$=createEffect(()=>
  this.actions$.pipe(
    ofType(editArticle),
    switchMap((action) =>
      this.articleService.editArticle(action.article).pipe(
        map((article) => editArticleSuccess({ article: article }))
      )
    )
  ),
  {dispatch : false}
  )
  
}
