import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../store/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  getAllArticles() {
    return this.httpClient.get<Article[]>('api/articles/');
  }

  insertArticle(article : Article) {
    return this.httpClient.post<Article>('api/articles/', article);

  }

  editArticle(article:Article){
    return this.httpClient.put<Article>('api/articles/', article);
  }

}
