import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postSer: PostService) { }

  posts$!: Observable<any>
  deleteFlag: boolean = false
  deletedPostId: string = ''

  ngOnInit(): void {
    this.getPosts()
  }
  
  getPosts(){
    this.posts$ = this.postSer.getPosts()
  }

  deletePost(id: number){
    this.deleteFlag = !this.deleteFlag
    this.deletedPostId = id.toString()
  }

  deletePostConfirmed(id: number){
    this.postSer.deletePost(id.toString()).subscribe((req:any) => {
      this.getPosts()
      alert(req.message)
    })
  }

}
