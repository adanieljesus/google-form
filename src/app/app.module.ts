import { NgModule } from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubmitComponentComponent } from './submit-component/submit-component.component';
import { NotComponent } from './not/not.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    QuestionsComponent,
    SubmitComponentComponent,
    StartComponent,
    NotComponent,
    StartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
