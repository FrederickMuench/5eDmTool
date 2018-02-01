import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Encounter } from '../classes/encounter';
import { Creature } from '../classes/creature';
import { Spell } from '../classes/spells';
import { allSpells } from './spells';
import { allMonsters } from './monsters';
import { KeysPipe} from './keysPipe';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {
  listedCreatures: any = [allMonsters[0]];
  selectedCreature: any;
  selectedSpell: Spell;
  allSpells: any = allSpells;
  allMonsters: any = allMonsters;
  encounters: any = [allMonsters[0]];

  constructor() { }

  ngOnInit() {
  }


  onCreatureSelect(creature: Creature): void {
    this.selectedCreature = creature;
    console.log(this.selectedCreature.name);
  }

  onSpellSelect(spell: Spell): void {
    console.log(spell.name);
    this.selectedSpell = spell;
  }

  onAddButtonClick(): void {
    this.listedCreatures.push(this.selectedCreature);
  }

  onDeleteButtonClick(): void {
    this.listedCreatures.pop();
  }
}
