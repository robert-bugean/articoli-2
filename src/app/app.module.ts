import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { appReducer } from './store/reducers';
// import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDeleteComponent } from './article-delete/article-delete.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './store/memory';
import { AppEffects } from './store/effects';


@NgModule({
  declarations: [
    AppComponent,
    // ArticleListComponent,
    ArticleDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
