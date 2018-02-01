import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EncountersComponent } from './encounters/encounters.component';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component';
import { SpellsComponent } from './spells/spells.component';
import {FilterPipe} from "./spells/filter.pipe";
import { SpellDetailComponent } from './spell-detail/spell-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    CreatureDetailComponent,
    AbilityDetailComponent,
    SpellsComponent,
    FilterPipe,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
