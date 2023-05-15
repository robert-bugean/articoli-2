import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, withLatestFrom, catchError, of, tap, throwError } from 'rxjs';
import { Article } from './article';
import { Store } from '@ngrx/store';

import { Injectable } from '@angular/core';
import { ArticleService } from '../service/article.service';
import {
  createArticle,
  createArticleSuccess,
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
}
