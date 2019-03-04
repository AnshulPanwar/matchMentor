import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'am3-candidate-list-left',
  templateUrl: './candidate-list-left.component.html',
  styleUrls: ['./candidate-list-left.component.scss']
})
export class CandidateListLeftComponent implements OnInit {


  public status:boolean = false;
  sIndex: number = null;
  public mentorCode:number;

  constructor() {
 
  }

  ngOnInit() {}

  @Input() candidateList: object[];
  @Input() id:number;
  @Output() onSelectValue:EventEmitter <any> = new EventEmitter();

  setIndex(index: number,mentorId:number) {
    this.sIndex = index;
    this.mentorCode = mentorId;
    console.log(this.mentorCode);

    this.onSelectValue.emit(this.mentorCode);
 }

  
}
