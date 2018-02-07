import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EncountersComponent } from './encounters/encounters.component';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import {CreatureService} from './creature.service';
import {SpellService} from './spell.service';
import {FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    CreatureDetailComponent,
    SpellsComponent,
    FilterPipe,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ CreatureService, SpellService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
