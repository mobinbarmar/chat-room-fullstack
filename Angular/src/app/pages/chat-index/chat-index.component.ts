import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, filter, distinct, tap } from 'rxjs';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat-index',
  templateUrl: './chat-index.component.html',
  styleUrls: ['./chat-index.component.scss']
})
export class ChatIndexComponent implements OnInit {

  constructor(private chatSer: ChatService,
              private router: Router) { }

  distinctUsers$!: Observable<any>

  ngOnInit(): void {
    this.getDistinctUsers()
  }

  gust(name: string){
    this.router.navigate(['/chat-index/group/' + name])
  }

  getDistinctUsers(){
    this.distinctUsers$ = this.chatSer.getDistinctUsers()
  }

}
