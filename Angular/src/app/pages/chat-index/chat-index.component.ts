import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat-index',
  templateUrl: './chat-index.component.html',
  styleUrls: ['./chat-index.component.scss']
})
export class ChatIndexComponent implements OnInit {

  constructor(private chatSer: ChatService,
              private router: Router) { }

  ngOnInit(): void {
  }

  gust(name: string){
    this.router.navigate(['/chat-index/group/' + name])
  }

}
