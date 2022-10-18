import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postSer:PostService,
              public _loc: Location) { }

  ngOnInit(): void {
  }

  postForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ])
  })

  addPost(){
    if(this.postForm.valid)
    this.postSer.addPost(this.postForm.value)
      .subscribe((res) => {
        console.log(res)
        this._loc.back()
      })
    else alert('please fill the form')
  }

}
