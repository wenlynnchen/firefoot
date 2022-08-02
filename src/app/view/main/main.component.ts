import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
