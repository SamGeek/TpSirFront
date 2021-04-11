import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collaborateur } from '../model';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  nom: string = '';
  prenom: string = '';
  email: string = '';
  filterCollaborateurName: string = '';

  collaborateurs  : Collaborateur[] = []


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    setTimeout(function(){  }, 5000);

    this.http.get<Collaborateur[]>('/api/collaborateur/getAll' ).subscribe((data) => {

      data.forEach(element => {
        this.collaborateurs.push(new Collaborateur(element.nom, element.prenom,element.email))
      });
      

    }, (error) => {} );

  }

  addCollaborateur(): void{

    const data = new Collaborateur(this.nom,this.prenom,this.email);

    this.http.post('/api/collaborateur/', data ).subscribe(() => {
      console.log('Collaborateur enrégistré avec succes');

    }, (error) => {} );

  }


}
