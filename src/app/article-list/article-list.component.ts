import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../store/article';
import { getArticles } from '../store/reducers';
import { loadArticle } from '../store/actions';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'content'];
  constructor(private store: Store) {}
  articles$?: Observable<Article[]> = this.store.pipe(select(getArticles));

  ngOnInit() {
    this.store.dispatch(loadArticle());
  }
}
