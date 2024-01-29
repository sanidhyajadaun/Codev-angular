import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentStandAloneComponent } from './student-stand-alone/student-stand-alone.component';
import { FontColorDirective } from './directive/font-color.directive';
import { FormsModule } from '@angular/forms';
// import { ItalicsFontDirective } from './directive/italics-font.directive';
// import { FontColorDirective } from './directive/font-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,

    // FontColorDirective
    //ItalicsFontDirective
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // FormsModule,
    BrowserAnimationsModule,
    StudentStandAloneComponent,
    FontColorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
