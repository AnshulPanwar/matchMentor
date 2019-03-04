import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am3-pending-item',
  templateUrl: './pending-item.component.html',
  styleUrls: ['./pending-item.component.scss']
})
export class PendingItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() menteeId: number;
  @Input() menteeSelected: boolean;
  @Input() menteeName: string;
  @Input() menteeScoreCombined: number;
  @Output() update: EventEmitter <any> = new EventEmitter();


  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("sourceId", event.target.id);
  }

  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("sourceId");
    //Special case when dropping into another Mentee Object, the mentee object will have the am3__dragMentee class
    if ( event.target.classList.contains( "am3__dragMentee" ) || event.target.classList.contains( "am3__pendingDrag" )  ){ 
      const $targetDropContainer = event.target.parentElement;
      const targetMentorId = $targetDropContainer.closest( ".am3__matchTreeContainer" ) ? $targetDropContainer.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id: undefined;
      const $targetDragItem = document.getElementById( event.target.id);

      const $sourceDragItem = document.getElementById( data );
      const $sourceDropContainer = $sourceDragItem.parentElement;
      const sourceMentorId = $sourceDropContainer.closest( ".am3__matchTreeContainer" ) ? $sourceDropContainer.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id : undefined;

      this.update.emit( [ 
        { 
          mentorId: targetMentorId? targetMentorId.replace( 'mentor-', '' ) : undefined,
          menteeId: data.replace( /pending-|mentee-/gi, '' )
        },
        { 
          mentorId: sourceMentorId ? sourceMentorId.replace( 'mentor-', '' ) : undefined,
          menteeId: event.target.id.replace( /pending-|mentee-/gi, '' )
        }
      ] );     
    } 
  }


}
