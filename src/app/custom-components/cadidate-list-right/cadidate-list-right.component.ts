import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am3-cadidate-list-right',
  templateUrl: './cadidate-list-right.component.html',
  styleUrls: ['./cadidate-list-right.component.scss']
})
export class CadidateListRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public menteeCode:number[] = [];

  @Input() candidateList: object[];
  @Input() id:number;
  @Output() onSelectValue:EventEmitter <any> = new EventEmitter();

  activateClass(cand, id){
    cand.active = !cand.active;   
    this.menteeCode.push(id);
    console.log(this.menteeCode);
    this.onSelectValue.emit(this.menteeCode);

  }


}
