import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from 'src/app/dialog/profile/profile.component';

@Component({
  selector: 'am3-match-tree',
  templateUrl: './match-tree.component.html',
  styleUrls: ['./match-tree.component.scss']
})
export class MatchTreeComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) {}

  @Input() mentorId:number;
  @Input() maxMentee:number;
  @Input() mentorSelected:boolean;
  @Input() mentorName:string;
  @Input() mentorLockStatus:boolean;
  @Input() mentees:string[];
  @Output() update: EventEmitter <any> = new EventEmitter();



  ngOnInit() {}

  allowDrop(event) {
    event.preventDefault();
  }

  openProfileModal(){ 
    const confirmDialogRef = this.dialog.open(ProfileComponent, {
      data: {

      },
      width: '3000px',
      height: '3000px',
      maxHeight: '90%'
    } );
  }

  drag(event) {
    event.dataTransfer.setData("sourceId", event.target.id);
  }

  drop(event) {
    console.log( event.target.classList );
    event.preventDefault();
    var data = event.dataTransfer.getData("sourceId");
    //Special case when dropping into another Mentee Object, the mentee object will have the am3__dragMentee class
    if ( event.target.classList.contains( "am3__dragMentee" ) || event.target.classList.contains( "am3__pendingDrag" ) ){ 
      const $targetDropContainer = event.target.parentElement;
      const targetMentorId = $targetDropContainer.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id;
      const $targetDragItem = document.getElementById( event.target.id);

      const $sourceDragItem = document.getElementById( data );
      const $sourceDropContainer = $sourceDragItem.parentElement;
      const sourceMentorId = $sourceDropContainer.closest( ".am3__matchTreeContainer" ) ? $sourceDropContainer.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id : undefined;

      this.update.emit( [ 
        { 
          mentorId: targetMentorId.replace( 'mentor-', '' ),
          menteeId: data.replace( /pending-|mentee-/gi, '' )
        },
        { 
          mentorId: sourceMentorId ? sourceMentorId.replace( 'mentor-', '' ) : undefined,
          menteeId: event.target.id.replace( /pending-|mentee-/gi, '' )
        }
      ] );     

 
    } else if( event.target.classList.contains( "am3__profileContainerOne"  ) && document.getElementById( data ).closest( ".am3__pendingList" )  || document.getElementById( data ).closest( ".am3__matchTreeContainer" ) && document.getElementById( data ).closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id.replace( 'mentor-', '' ) != event.target.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id.replace( 'mentor-', '' )) { 
      const $targetDropContainer = event.target;
      const targetMentorId = $targetDropContainer.closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id.replace( 'mentor-', '' );
      const sourceDragItemId = data;
      const sourceMentorId = document.getElementById( sourceDragItemId ).closest( ".am3__matchTreeContainer" ) ? document.getElementById( sourceDragItemId ).closest( ".am3__matchTreeContainer" ).querySelector( ".am3__dragMentor").id : undefined;

      this.update.emit( [ 
        { 
          mentorId: targetMentorId.replace( 'mentor-', '' ),
          menteeId: sourceDragItemId.replace( /pending-|mentee-/gi, '' )
        }
      ] );
    }
  }

}
