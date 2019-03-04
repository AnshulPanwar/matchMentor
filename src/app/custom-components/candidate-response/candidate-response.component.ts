import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am3-candidate-response',
  templateUrl: './candidate-response.component.html',
  styleUrls: ['./candidate-response.component.scss']
})
export class CandidateResponseComponent implements OnInit {

  // @Input() mentorList:object[];

  @Input() itemList: object[];

  constructor() { }

  ngOnInit() {
  }

}
