import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  sendMessage(body: any){
    return this.http.post(environment.SERVER + '/chat', body)
  }

  getMessages(){
    return this.http.get(environment.SERVER + '/chat')
  }

  deleteMessage(id:string){
    return this.http.delete(environment.SERVER + '/chat/' + id)
  }

  editMessage(body: any){
    return this.http.put(environment.SERVER + '/chat', body)
  }

  getDistinctUsers(){
    return this.http.get(environment.SERVER + '/chat/distinct-users')
  }
}
