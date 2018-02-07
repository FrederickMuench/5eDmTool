import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EncountersComponent} from './encounters/encounters.component';
import {SpellsComponent} from './spells/spells.component';

const routes: Routes = [
  {path: 'creatures', component: EncountersComponent},
  {path: 'spells', component: SpellsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
