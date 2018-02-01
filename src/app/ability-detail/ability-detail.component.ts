import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.css']
})
export class AbilityDetailComponent implements OnInit {

  @Input() ability: any;

  constructor() { }

  ngOnInit() {
  }

}
