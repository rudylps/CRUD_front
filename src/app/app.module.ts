import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from './api.service';
import { PersonneServiceService } from './personne-service.service';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routing.module';
import { MatModule } from '../mat-module';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { MatIconModule } from '@angular/material';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';

// const routes: Routes = [
//   {path: 'ajoutPersonne', component: AddPersonneComponent},
//   {path: 'personne', component: PersonneDetailComponent},
//   {path: 'listePersonnes', component: ListePersonnesComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    AddPersonneComponent,
    ListePersonnesComponent,
    PersonneDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    ApiService,
    PersonneServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
