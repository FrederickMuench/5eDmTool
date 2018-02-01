import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- here
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { EncountersComponent } from './encounters/encounters.component';
import {KeysPipe} from "./encounters/keysPipe";
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component'; // <-- here
@NgModule({
  declarations: [
    AppComponent,
    EncountersComponent,
    KeysPipe,
    CreatureDetailComponent,
    AbilityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
