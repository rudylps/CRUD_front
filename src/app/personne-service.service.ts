import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Personne } from './Personne';
import { HttpClient } from '@angular/common/http';

// passe plat

@Injectable()
export class PersonneServiceService {

  constructor(private api: ApiService,
  private http: HttpClient) { }

  selectedAffaire: Personne = new Personne();

  create(personne: Personne): Observable<Personne> {
    return this.api.createPersonne(personne);
  }

  afficherDetailPersonne(id: number): Observable<Personne> {
    // console.log('le get fonctionne');
    return this.api.afficherDetailPersonne(id);
  }

  updatePersonne(personne: Personne): Observable<Personne> {
    return this.http.put<Personne>('http://localhost:8080/personne/edit/' + personne.id, personne);
  }

  deletePersonne(id: number): Observable<any> {
    return this.api.deletePersonne(id);
  }

}
