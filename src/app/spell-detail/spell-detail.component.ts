import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() spell: any;

}
