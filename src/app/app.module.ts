import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeService } from './Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewsComponent } from './news/news.component';
import { TestapiComponent } from './testapi/testapi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataComponent } from './form-data/form-data.component';
import { AllownumbersonlyDirective } from './Directives/allownumbersonly.directive';
import { OtpFocusDirective } from './Directives/otpfocus.directive';
import { DigitsOnlyDirective } from './Directives/digitsonly.directive';
import { AllowtextonlyDirective } from './Directives/allowtextonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    HomeComponent,
    ReactiveFormComponent,
    NewsComponent,
    TestapiComponent,
    FormDataComponent,
    AllownumbersonlyDirective,
    OtpFocusDirective,
    DigitsOnlyDirective,
    AllowtextonlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
