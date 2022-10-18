import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private postSer: PostService,
              public _loc: Location) { }

  id: string = ''
  post$!: Observable<any>
  editFlag: boolean = false
  deleteFlag: boolean = false

  ngOnInit(): void {
    this.getPost()
  }
  
  getPost(){
    this.id = this.route.snapshot.params['id']
    this.post$ = this.postSer.getPost(this.id)
  }

  editPost(id:number, title: string, description: string){
    const body = {
      id: id.toString(),
      title,
      description
    }

    this.postSer.editPost(body).subscribe((res) => {
      this.getPost()
      this.editFlag = false
    })
  }

  deletePost(id:number){
    this.postSer.deletePost(id.toString()).subscribe((res:any) => {
      this._loc.back()
      alert(res.message)
    })
  }

}
