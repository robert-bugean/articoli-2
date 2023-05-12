import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs';
import { Article } from './article';


import {Injectable} from '@angular/core'
import { ArticleService } from '../service/article.service';
import { loadArticle, loadArticleSuccess } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticle),
      switchMap(() =>
        this.articleService
          .getAllArticles().pipe(
            map((data: Article[]) => loadArticleSuccess({ payload: data })))
      )
    )
  );
}
