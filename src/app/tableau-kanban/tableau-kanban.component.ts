import { Component, OnInit } from '@angular/core';
import { Collaborateur, TableauKanban } from '../model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tableau-kanban',
  templateUrl: './tableau-kanban.component.html',
  styleUrls: ['./tableau-kanban.component.css']
})
export class TableauKanbanComponent implements OnInit {

  libelle : string = ''
  selectedCollaborateurs : Collaborateur[]= []
  tableauxKanbans : TableauKanban[]= []
  collaborateurs  : Collaborateur[] = []


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    setTimeout(function(){  }, 2000);

    this.http.get<Collaborateur[]>('/api/collaborateur/getAll' ).subscribe((data) => {

      data.forEach(element => {
        let collab = new Collaborateur(element.nom, element.prenom,element.email)
        collab.id = element.id
        this.collaborateurs.push(collab)
      });
      

    }, (error) => {} );

    setTimeout(function(){  }, 2000);



    this.http.get<TableauKanban[]>('/api/tableaukanban/getAll' ).subscribe((data) => {

      data.forEach(element => {
        let collab = new TableauKanban(element.libelle)
        collab.collaborateurs = element.collaborateurs
        this.tableauxKanbans.push(collab)
      });
      

    }, (error) => {} );

  }

  addTableauKanban(): void{

    const data = new TableauKanban(this.libelle);
    data.collaborateurs = this.selectedCollaborateurs;

    this.http.post('/api/tableaukanban/', data ).subscribe(() => {
      console.log('Tableau Kanban enrégistré avec succes');

    }, (error) => {} );

  }


}
