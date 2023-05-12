import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadArticle } from 'src/app/actions';
import { Article } from 'src/app/article';
import { getArticles } from 'src/app/reducers';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  constructor(private store: Store) {}
  articles$?: Observable<Article[]> = this.store.pipe(select(getArticles));

  ngOnInit() {
    this.store.dispatch(loadArticle());
  }
}
