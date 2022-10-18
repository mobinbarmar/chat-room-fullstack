import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.scss']
})
export class ChatGroupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private chatSer: ChatService) { }

  name!:string
  messages$!: Observable<any>
  editFlag: boolean = false

  myForm = new FormGroup({
    myMessage: new FormControl('')
  })

  

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    this.getMessages()
  }

  sendMessage(message: string){
    const body = {
      name: this.name,
      message
    }
    this.chatSer.sendMessage(body).subscribe((res) => {
      console.log(res);
      this.getMessages()
    })
  }

  getMessages(){
    this.messages$ = this.chatSer.getMessages()
  }

  deleteMessage(id: number){
    this.chatSer.deleteMessage(id.toString()).subscribe((res: any) => {
      alert(res.message)
      this.getMessages()
    })
  }

  editMode(){
    this.editFlag = !this.editFlag
  }
  
  editMessage(id:number, name: string){
    const body = {
      id: id.toString(),
      name,
      message: this.myForm.value.myMessage
    }
    this.chatSer.editMessage(body).subscribe((res:any) => {
      alert(res.message)
      this.getMessages()
      this.editFlag = !this.editFlag
    })
  }
}
