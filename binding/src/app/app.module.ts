import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component'; // Adjust the path based on your project structure
//import { AboutComponent } from './about/about.component'; // Adjust the path based on your project structure

const routes: Routes = [
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    // Add more components as needed
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configuring routes
    // Add other modules your application needs here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
