import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { PersonneServiceService } from '../personne-service.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  personne: Personne = new Personne();
  editing: boolean;

  constructor(private personneService: PersonneServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const lastFragment = this.route.snapshot.url[this.route.snapshot.url.length - 1];
    // Récupère le dernier élément du tableau de chemin URL

     // this.editing=false;
     // this.affaire.id=0,
     // this.affaire.nom=''
     // this.affaire.date_cloture='',
     // this.affaire.date_creation='',
     // this.affaire.lieu='',
     // this.affaire.rapport=''
    }


  onsubmit(form: NgForm) {
    this.personneService.create(this.personne).subscribe(
      () => this.router.navigate(['/listePersonnes/'])
   );
}

   // showSnack(affaire) {
   // this.snackBar.open(`${this.editing ? 'Updated' : 'created' }
   // affaire`, 'opération réussie' , { duration: 1000 }); // 2. Afficher un message de confirmation de ma mise a jour

   // setTimeout ( ()  => {
   // this.router.navigateByUrl(''); // Retourne sur le lien suivant: liste des users
   // },1000);
   // }

}
