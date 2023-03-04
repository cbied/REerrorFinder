import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorFinderComponent } from './components/errorFinder/error-finder.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'errorFinder', component: ErrorFinderComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
