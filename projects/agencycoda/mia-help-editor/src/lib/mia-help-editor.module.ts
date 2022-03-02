import { NgModule } from '@angular/core';

// Agency Coda Libraries
import { MiaLayoutModule } from '@agencycoda/mia-layout';

// Components
import { HelpListComponent } from './pages/help-list/help-list.component';
import { HelpfulColumnComponent } from './columns/helpful-column/helpful-column.component';
import { NewItemHelpComponent } from './pages/new-item-help/new-item-help.component';


@NgModule({
  declarations: [
    HelpListComponent,
    HelpfulColumnComponent,
    NewItemHelpComponent
  ],
  imports: [
    // Agency Coda Libraries
    MiaLayoutModule
  ],
  exports: [
    HelpListComponent,
    HelpfulColumnComponent,
    NewItemHelpComponent
  ]
})
export class MiaHelpEditorModule { }
