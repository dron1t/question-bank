import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
   declarations: [
      AppComponent,
      QuestionEditorComponent,
      QuestionListComponent,
      MessagesComponent,
      DashboardComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
     HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
     )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
