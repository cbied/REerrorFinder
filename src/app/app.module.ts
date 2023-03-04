import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorFinderComponent } from './components/errorFinder/error-finder.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorFinderComponent,
    HomeComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    SpreadSheetsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
