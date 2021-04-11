import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { TagComponent } from './tag/tag.component';
import { FilterCollaborateurPipePipe } from './filter-collaborateur-pipe.pipe';
import { TableauKanbanComponent } from './tableau-kanban/tableau-kanban.component';

@NgModule({
  declarations: [
    AppComponent,
    CollaborateurComponent,
    TagComponent,
    FilterCollaborateurPipePipe,
    TableauKanbanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
