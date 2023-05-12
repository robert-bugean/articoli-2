import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Article } from '../store/article';
import { getArticles } from '../store/reducers';
import { loadArticle } from '../store/actions';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent {
  articles$?: Observable<Article[]> = this.store.pipe(select(getArticles))
  
  constructor(private store: Store) {}

  onInit() {
    this.store.dispatch(loadArticle());
  }

  value = ''
}