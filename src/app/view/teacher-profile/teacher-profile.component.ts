import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
@Input() id: any;
teachers = [
  [ { Name:'Tamzyn Hollis', Nickname:'Teacher Tam', about:'My name is Tam. I am cool like that', src:'assets/images/tam.jpg'} ],
  [ { Name:'Kaylyn', Nickname:'Teacher Kaylyn', about:'My name is Kaylyn. I am cool like that', src:'assets/images/kay.jpg'}],
  [ { Name:'Steph', Nickname:'Teacher Steph', about:'My name is Tam. I am cool like that', src:'assets/images/steph.jpg'}],
  [ { Name:'Sarah', Nickname:'Teacher Sarah', about:'My name is Sarah. I am cool like that', src:'assets/images/sarah.jpg'}],
  [ { Name:'S', Nickname:'Teacher S', about:'My name is S. I am cool like that', src:'assets/images/shile.jpg'}],
  [ { Name:'Mpho', Nickname:'Teacher Mpho', about:'My name is Mpho. I am cool like that', src:'assets/images/mpho.jpg'}],
  [ { Name:'Tarah', Nickname:'Teacher Tarah', about:'My name is Tarah. I am cool like that', src:'assets/images/tarah.jpg'}],
]

name: any;
nickname:any;
about:any;
url:any;

constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.params.subscribe((param: any) => {

      this.id = this.route.snapshot.queryParams["id"];
      
      console.log( this.teachers [1][0].Name)
      this.name = this.teachers[this.id][0].Name;
      this.nickname = this.teachers[this.id][0].Nickname;
      this.about = this.teachers[this.id][0].about;
      this.url = this.teachers[this.id][0].src;
  })

}


}
