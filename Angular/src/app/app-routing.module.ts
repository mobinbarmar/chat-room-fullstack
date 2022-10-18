import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGroupComponent } from './pages/chat-index/chat-group/chat-group.component';
import { ChatIndexComponent } from './pages/chat-index/chat-index.component';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { PostDescriptionComponent } from './pages/posts/post-description/post-description.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path:'posts', component:PostsComponent, },
  { path: 'posts/add-post', component: AddPostComponent },
  { path: 'posts/post-description/:id', component: PostDescriptionComponent },
  { path: 'chat-index', component: ChatIndexComponent },
  { path: 'chat-index/group/:name', component: ChatGroupComponent },
  { path:'', redirectTo:'chat-index', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
