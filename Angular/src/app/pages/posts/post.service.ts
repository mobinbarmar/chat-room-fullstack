import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(environment.SERVER + '/post')
  }

  addPost(body: any){
    return this.http.post(environment.SERVER + '/post' , body)
  }

  getPost(id: string){
    return this.http.get(environment.SERVER + '/post' + '/' + id)
  }

  editPost(body: any){
    return this.http.put(environment.SERVER + '/post', body)
  }

  deletePost(id: string){
    return this.http.delete(environment.SERVER + '/post' + '/' + id)
  }
}
