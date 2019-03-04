import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MatSlideToggleChange
} from '@angular/material';

@Component({
  selector: 'am3-stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.scss']
})
export class StatsComponentComponent implements OnInit {

  @Input() count: number;
  @Input() countLabel: string;
  @Input() countColor: string;
  @Input() action: object[];

  slideVal: number = 1;



  ngOnInit() {}


}
