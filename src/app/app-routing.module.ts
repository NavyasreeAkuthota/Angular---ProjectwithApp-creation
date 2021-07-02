import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MondayAboutComponent } from './monday-about/monday-about.component';
import { MondayCourseComponent } from './monday-course/monday-course.component';
import { MondayHomeComponent } from './monday-home/monday-home.component';
import { MondayJoinnowComponent } from './monday-joinnow/monday-joinnow.component';

const routes: Routes = [
  {path:'',component:MondayHomeComponent},
  {path:'course',component:MondayCourseComponent},
  {path:'joinnow',component:MondayJoinnowComponent},
  {path:'about',component:MondayAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
