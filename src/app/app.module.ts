import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MondayHomeComponent } from './monday-home/monday-home.component';
import { MondayCourseComponent } from './monday-course/monday-course.component';
import { MondayJoinnowComponent } from './monday-joinnow/monday-joinnow.component';
import { MondayAboutComponent } from './monday-about/monday-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MondayHomeComponent,
    MondayCourseComponent,
    MondayJoinnowComponent,
    MondayAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
