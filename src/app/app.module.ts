import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { OrinialComponent } from './view/orinial/orinial.component';
import { MainEnComponent } from './view/main-en/main-en.component';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { MessageComponent } from './view/message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrinialComponent,
    MainEnComponent,
    MessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
