import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  libelle : string = '';
  tags  : Tag[] = []


  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.http.get<Tag[]>('/api/tag/getAll' ).subscribe((data) => {

      data.forEach(element => {
        this.tags.push(new Tag(element.libelle))
      });
      

    }, (error) => {} );

  }

  addTag(): void{

    setTimeout(function(){  }, 7000);

    const data = new Tag(this.libelle);

    this.http.post('/api/tag/', data ).subscribe(() => {
      console.log('Tag enrégistré avec succes');

    }, (error) => {} );

  }

}
