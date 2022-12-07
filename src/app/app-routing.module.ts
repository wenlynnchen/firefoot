import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { OrinialComponent } from './view/orinial/orinial.component';
import { MainEnComponent } from './view/main-en/main-en.component';
import { MessageComponent } from './view/message/message.component';
import { TeacherProfileComponent } from './view/teacher-profile/teacher-profile.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main-en', component: MainEnComponent },
  { path: 'original', component: OrinialComponent },
  { path: 'message', component: MessageComponent },
  { path: 'teacher', component: TeacherProfileComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
