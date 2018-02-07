import {Component, Inject, OnInit, Pipe, PipeTransform} from '@angular/core';
import { allSpells } from './spells';
import { allMonsters } from './monsters';
import {Creature} from '../../../angular-electron-win32-x64/resources/app/src/app/classes/creature';
import {CreatureService} from '../creature.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {
  listedCreatures: any = [];
  selectedCreature: any;
  allSpells: any = allSpells;
  allMonsters: any = allMonsters;
  encounters: any = [];

  constructor( private creatureService: CreatureService ) {}

  ngOnInit() {
    this.listedCreatures = this.creatureService.listedCreatures;
  }


  onCreatureSelect(creature: Creature): void {
    this.selectedCreature = creature;
    console.log(this.selectedCreature.name);
  }


  onAddButtonClick(): void {
    this.creatureService.listedCreatures.push(this.selectedCreature);
  }

  onDeleteButtonClick(): void {
    this.listedCreatures.pop();
  }
}
