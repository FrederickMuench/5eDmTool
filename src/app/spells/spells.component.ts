import { Component, OnInit } from '@angular/core';
import {allSpells} from '../encounters/spells';
import {SpellService} from '../spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  constructor( private spellService: SpellService ) { }

  ngOnInit() {
    this.savedSpells = this.spellService.listedSpells;
  }
  spells = allSpells;
  selectedSpell: any;
  savedSpells: any;
  searchText: any;

  onSpellSelect(spell): void {
    this.selectedSpell = spell;
  }
  onAddSpell(): void {
    for ( let i = 0; i < this.savedSpells.length; i++ ) {
      if ( this.savedSpells[i].name === this.selectedSpell.name ) {
        return;
      }
    }
    this.savedSpells.push( this.selectedSpell );
  }
  onDeleteSpell(): void {
    this.savedSpells.pop();
  }

}
