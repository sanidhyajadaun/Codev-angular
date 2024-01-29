// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewsComponent } from './news/news.component';
import { TestapiComponent } from './testapi/testapi.component';
import { FormDataComponent } from './form-data/form-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'employeedetails', component: EmployeedetailsComponent },
  { path: 'test',component: TestComponent},
  { path: 'reactive-form',component: ReactiveFormComponent},
  { path: 'news',component: NewsComponent}, 
  { path: 'testapi',component: TestapiComponent},
  { path: 'form-data',component: FormDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
