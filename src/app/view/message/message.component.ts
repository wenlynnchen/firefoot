import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor( public db: AngularFireDatabase) { }

messages: any =[];

  ngOnInit(): void {
    this.db.list('Message').valueChanges().subscribe(message => {
  this.messages =   message ;
  this.messages.sort();
  });
  }

}
