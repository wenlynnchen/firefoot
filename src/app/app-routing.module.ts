import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { OrinialComponent } from './view/orinial/orinial.component';
import { MainEnComponent } from './view/main-en/main-en.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'en/main', component: MainEnComponent },
  { path: 'original', component: OrinialComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
