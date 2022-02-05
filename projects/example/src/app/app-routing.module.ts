import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpListComponent } from 'projects/agencycoda/mia-help-editor/src/lib/pages/help-list/help-list.component';

const routes: Routes = [
  { path: '', component: HelpListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
