import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { PostDescriptionComponent } from './pages/posts/post-description/post-description.component';
import { ChatIndexComponent } from './pages/chat-index/chat-index.component';
import { ChatGroupComponent } from './pages/chat-index/chat-group/chat-group.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddPostComponent,
    PostDescriptionComponent,
    ChatIndexComponent,
    ChatGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
