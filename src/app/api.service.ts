import { Injectable } from '@angular/core';
import { Personne } from './Personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

   // Création d'une affaire
  createPersonne(personne: Personne): Observable<Personne> {
  return this.http.post<Personne>('http://localhost:8080/ajoutPersonne', personne);
  }
  afficherPersonnes(): Observable<Personne[]> {
  return this.http.get('http://localhost:8080/personnes') as Observable<Personne[]>;
  }
  afficherDetailPersonne(id: number): Observable<Personne> {
    return this.http.get<Personne>('http://localhost:8080/personne/' + id);
  }
  deletePersonne(id: number): Observable<Personne> {
    return this.http.delete<Personne>('http://localhost:8080/supprimePersonne/' + id);
  }
  // updatePersonne(personne: Personne, id): Observable<Personne> {
  //   return this.http.put<Personne>('http://localhost:8080/personne/edit/' + personne.id, personne);
  // }

}
