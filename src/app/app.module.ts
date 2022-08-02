import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { OrinialComponent } from './view/orinial/orinial.component';
import { MainEnComponent } from './view/main-en/main-en.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrinialComponent,
    MainEnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
