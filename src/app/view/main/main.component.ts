import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  positionMap = {
    street: "Brookline",
    num: "123",
    city: "NewYork"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

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
      alert("成功送出")
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
