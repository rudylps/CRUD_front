import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AddPersonneComponent } from './app/add-personne/add-personne.component';
import { PersonneDetailComponent } from './app/personne-detail/personne-detail.component';
import { ListePersonnesComponent } from './app/liste-personnes/liste-personnes.component';
import { EditerPersonneComponent } from './app/editer-personne/editer-personne.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/listePersonnes'},
    {path: 'ajoutPersonne', component: AddPersonneComponent},
    {path: 'personne/:id', component: PersonneDetailComponent},
    {path: 'listePersonnes', component: ListePersonnesComponent},
    {path: 'editPersonne/:id', component: EditerPersonneComponent}
    // {path: '**', component: Page404Component}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   } )

  export class RoutingModule { }
