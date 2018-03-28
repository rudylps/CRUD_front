import { Component, OnInit } from '@angular/core';
import { Personne } from '../Personne';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  listePersonnes = new Array<Personne>();
  personne = new Personne();

  afficherId() {
    this.router.navigate(['/personne', this.personne.id]);
  }

  ngOnInit() {
    this.api.afficherPersonnes().subscribe( (data: Personne[]) => {
      this.listePersonnes = data;
    });
  } // c'est ce qui va se passer dans le chargement du composant listePersonnes

}
