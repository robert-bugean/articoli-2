import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Article } from '../store/article';
import { editArticle } from '../store/actions';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  constructor(public fb: FormBuilder, private store: Store) { }


  editArticle = this.fb.group({
    id: this.fb.control('', [Validators.required]),
    title: this.fb.control('', [Validators.required]),
    content: this.fb.control('', [Validators.required]),

  })



  onSubmit() {
    console.log("editArticle: ", this.editArticle.value);
    
    let article:Article={
      id: parseInt( this.editArticle.value.id!),
      title:this.editArticle.value.title!,
      content:this.editArticle.value.content!
    }
    
    this.store.dispatch(editArticle({ article: article }))

  }

}
