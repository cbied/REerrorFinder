import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorFinderComponent } from './components/errorFinder/error-finder.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorFinderComponent,
    HomeComponent,
    DocumentationComponent,
  ],
  imports: [
    BrowserModule,
    SpreadSheetsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
