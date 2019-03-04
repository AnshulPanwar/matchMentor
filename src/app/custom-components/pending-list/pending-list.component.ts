import {
  Component,
  OnInit,
  Input,
  ɵConsole,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'am3-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent implements OnInit {

  constructor() {}

  @Input() pendingList: object[];

  ngOnInit() {}

  @Output() pendingListUpdate: EventEmitter<number> = new EventEmitter();

  updatePendingList( event ){ 
    this.pendingListUpdate.emit( event );
  }

  drop( event ){ 
    console.log( event );
  }
}
