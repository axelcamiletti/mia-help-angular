import { NgModule } from '@angular/core';

// Agency Coda Libraries
import { MiaLayoutModule } from '@agencycoda/mia-layout';

// Components
import { HelpListComponent } from './pages/help-list/help-list.component';


@NgModule({
  declarations: [
    HelpListComponent
  ],
  imports: [
    // Agency Coda Libraries
    MiaLayoutModule
  ],
  exports: [
    
  ]
})
export class MiaHelpEditorModule { }
