import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creature-detail',
  templateUrl: './creature-detail.component.html',
  styleUrls: ['./creature-detail.component.css']
})
export class CreatureDetailComponent implements OnInit {

  @Input() creature: any;

  selectedAbility: any;

  constructor() { }

  ngOnInit() {
  }

  onSelectAbility(ability: any): void {
    this.selectedAbility = ability;
  }

}
