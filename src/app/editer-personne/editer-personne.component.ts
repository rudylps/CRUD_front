import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PersonneServiceService } from '../personne-service.service';
import { ApiService } from '../api.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-editer-personne',
  templateUrl: './editer-personne.component.html',
  styleUrls: ['./editer-personne.component.css']
})
export class EditerPersonneComponent implements OnInit {

  id: string;
  personne = new Personne();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private personneService: PersonneServiceService,
    private apiService: ApiService) { }

  ngOnInit() { console.log('init');

  this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
    const personneIdAsInt = parseInt(this.id, 10);

    console.log('id' + this.id);
    this.personneService
     .afficherDetailPersonne(personneIdAsInt)
     .subscribe(
       personne => (this.personne = personne),
    );
  });
  }

  updatePersonne(personne: Personne) {
    this.personneService.updatePersonne(this.personne)
    .subscribe(
      () => this.router.navigate(['/listePersonnes'])
    );
  }


}
