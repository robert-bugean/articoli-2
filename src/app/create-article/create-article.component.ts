import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, StoreConfig } from '@ngrx/store';
import { createArticle } from '../store/actions';
import { Article } from '../store/article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent {
  constructor(public fb: FormBuilder, private store: Store) {}

  insertArticle = this.fb.group({
    id: [null, [Validators.required]],
    title: [null, [Validators.required]],
    content: [null, [Validators.required]],
  });

  article: Article = {
    id: this.insertArticle.value.id ?? 0,
    title: this.insertArticle.value.title ?? '',
    content: this.insertArticle.value.content ?? '',
  };

  onSubmit() {
    console.log(this.insertArticle.value); //log
    
    const formValue = this.insertArticle.value;
    if (formValue.id && formValue.title && formValue.content) {
      const article: Article = {
        id: formValue.id,
        title: formValue.title,
        content: formValue.content,
      };
      this.store.dispatch(createArticle({ article: article }));
    }
  }
}
