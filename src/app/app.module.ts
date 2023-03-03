import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpreadSheetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
