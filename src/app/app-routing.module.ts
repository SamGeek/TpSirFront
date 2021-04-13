import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { TagComponent } from './tag/tag.component';
import { TableauKanbanComponent } from './tableau-kanban/tableau-kanban.component';

const routes: Routes = [
  { path: '', component: CollaborateurComponent },
  { path: 'collaborateur', component: CollaborateurComponent },
  { path: 'tag', component: TagComponent },
  { path: 'tableaukanban', component: TableauKanbanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
