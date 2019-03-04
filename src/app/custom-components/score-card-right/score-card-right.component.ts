import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am3-score-card-right',
  templateUrl: './score-card-right.component.html',
  styleUrls: ['./score-card-right.component.scss']
})
export class ScoreCardRightComponent implements OnInit {
  @Input() score:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
