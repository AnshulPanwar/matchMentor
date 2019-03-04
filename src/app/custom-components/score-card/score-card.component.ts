import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am3-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input() score:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
