import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { BehaviorSubjectComponent } from './rxjs/behavior-subject/behavior-subject.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MergeInstanceComponent } from './rxjs/merge-instance/merge-instance.component';
import { DebounceInputComponent } from './rxjs/debounce-input/debounce-input.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'rxjs', component: RxjsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentItemComponent,
    BehaviorSubjectComponent,
    RxjsComponent,
    MergeInstanceComponent,
    DebounceInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
