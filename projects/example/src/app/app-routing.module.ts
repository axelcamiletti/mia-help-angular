import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpListComponent } from 'projects/agencycoda/mia-help-editor/src/lib/pages/help-list/help-list.component';
import { NewItemHelpComponent } from 'projects/agencycoda/mia-help-editor/src/public-api';

const routes: Routes = [
  { path: '', component: HelpListComponent },
  { path: 'help/new-item', component: NewItemHelpComponent },
  { path: 'help/new-item/:id', component: NewItemHelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
