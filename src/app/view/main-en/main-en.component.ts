import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';


@Component({
  selector: 'app-main-en',
  templateUrl: './main-en.component.html',
  styleUrls: ['./main-en.component.css']
})
export class MainEnComponent implements OnInit {

  name:string = '';
  email:string = '';
  time:string = '';
  number:string = '';
  message:string = '';

  constructor( public db: AngularFireDatabase) { }


  ngOnInit(): void {
  }

  send(){
    var date = new Date().toLocaleString();
    const ref = this.db.list("Message");
    ref.push({"name":this.name,"Email":this.email,"Phone":this.number,"AvailableTime":this.time,"Message":this.message,"time":date}).then((res)=>{
      alert("Sent Successfully")
      this.name = '';
      this.email = '';
      this.time = '';
      this.number = '';
      this.message = '';
    }).catch((err)=>{
    console.log(err);
    })
  }

}
