import {
  Component,
  OnInit
} from '@angular/core';
import {
  GlobalState
} from 'src/app/global.state';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'am3-match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.scss']
})
export class MatchPageComponent implements OnInit {

  public menteeMap;

  public mentorTree = [];

  public pendingList = [];


  constructor(
    private globalState: GlobalState,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.globalState.toggle('sidenav.forcedCollapseMode');
    this.globalState.notifyDataChanged('loading', false);



    this.matchService.getMatch().subscribe( response=> { 
      this.mentorTree = this.processMatches( response );
      const matchedMentee = this.mentorTree.map( (item:any)=> item.mentees).reduce( ( item, result )=> { 
        return [ ...result, ...item ];
      }, [] );
  
      this.matchService.getUnmatched( ).subscribe( response => { 
        this.pendingList = this.processMentees( response );
        const combinedMentee = [ ...this.pendingList, ...matchedMentee];
  
        this.menteeMap = combinedMentee.reduce( ( result:any, item  )=> { 
          return { ...result, [item.menteeId] : item };
        }, {} );
      } );
    })
  }

  processMentees( response ){ 
    return response.map( item => { 
      return { 
        menteeId: item.id,
        menteeName: item.name,
        menteeSelected: false,
        menteeScoreCombined: 0,
        menteeScore: 0,
        mentorScore: 0,
        email: item.email
      };
    });
  }

  processMatches( response ){ 
    let mentorTree = [];
    for ( let key in response ){ 
      let mentor = { 
        mentorId: response[ key ][0].mentor.id,
        mentorSelected: false,
        maxMentee: response[ key ][0].mentor.maxMentees,
        mentorName:  response[ key ][0].mentor.name,
        mentorLockStatus: response[ key ][0].mentor.status === "LOCKED",
        mentor: response[ key ][0].mentor,
        mentees: [ response[ key ][0] ? 
        {...response[ key ][0].mentee, menteeName: response[ key ][0].mentee.name, menteeId: response[ key ][0].mentee.id, mentorScore: parseInt( response[ key ][0].mentorScore ), menteeScore: parseInt( response[ key ][0].menteeScore), menteeScoreCombined: parseInt( response[ key ][0].combinedScore)} : null, 
        response[ key ][1] ? { ...response[ key ][1].mentee, menteeId: response[ key ][1].mentee.id, menteeName: response[ key ][1].mentee.name, mentorScore: parseInt( response[ key ][1].mentorScore ), menteeScore: parseInt( response[ key ][1].menteeScore), menteeScoreCombined: parseInt( response[ key ][1].combinedScore) } : null, 
        response[ key ][2] ? { ...response[ key ][2].mentee, menteeId: response[ key ][2].mentee.id, menteeName: response[ key ][2].mentee.name, mentorScore: parseInt( response[ key ][2].mentorScore ), menteeScore: parseInt( response[ key ][2].menteeScore), menteeScoreCombined: parseInt( response[ key ][2].combinedScore) } : null ].filter( item => item )
      };

      mentorTree.push( mentor );
    }
    return mentorTree;
  }

  updateMatchesFromPending( matchesArray ){ 

    if ( matchesArray.length === 1 ){ 
      this.pendingList = this.pendingList.filter( (item:any) => { 
          return item.menteeId != matchesArray[1].menteeId;
        } );
        
        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId ==  matchesArray[1].mentorId && item.maxMentee > item.mentees.length ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[1].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );
    } else { 

        this.pendingList = [ this.menteeMap[ matchesArray[0].menteeId ],
        ...this.pendingList.filter( (item:any) => { 
          return item.menteeId != matchesArray[1].menteeId;
        } ) ] ;

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId ==  matchesArray[1].mentorId  ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[1].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          item.mentees = item.mentees.filter( mentee => { 
            return mentee.menteeId != matchesArray[0].menteeId
          } );
          return [ ...result, item ];
        }, [] );

    }
  }

  updateMatches( matchesArray ){
      console.log( matchesArray);
      const reshapedArray = matchesArray.map( item => { 
        return { 
          mentor_id: item.mentorId,
          mentee_id: item.menteeId
        }
      } );
      this.matchService.addNewMatch( reshapedArray ).subscribe( response => {
        console.log( response );
        alert( 'Updated Match' );
      });

      if ( matchesArray.length === 1 ){ 
        this.pendingList = this.pendingList.filter( (item:any) => { 
          return item.menteeId != matchesArray[0].menteeId;
        } );
        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          item.mentees = item.mentees.filter( mentee => { 
            return mentee.menteeId != matchesArray[0].menteeId
          } );
          return [ ...result, item ];
        }, [] );
        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId ==  matchesArray[0].mentorId ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[0].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );

      } else if ( !matchesArray[1].mentorId ){ 

        this.pendingList = [ this.menteeMap[ matchesArray[1].menteeId ],
        ...this.pendingList.filter( (item:any) => { 
          return item.menteeId != matchesArray[0].menteeId;
        } ) ] ;

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId ==  matchesArray[0].mentorId  ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[0].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          item.mentees = item.mentees.filter( mentee => { 
            return mentee.menteeId != matchesArray[1].menteeId
          } );
          return [ ...result, item ];
        }, [] );
      } else if ( matchesArray[1].mentorId != matchesArray[0].mentorId ) { 
        
        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          item.mentees = item.mentees.filter( mentee => { 
            return mentee.menteeId != matchesArray[0].menteeId
          } );
          return [ ...result, item ];
        }, [] );

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId ==  matchesArray[0].mentorId  ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[0].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          item.mentees = item.mentees.filter( mentee => { 
            return mentee.menteeId != matchesArray[1].menteeId
          } );
          return [ ...result, item ];
        }, [] );

        this.mentorTree = this.mentorTree.reduce( ( result, item ) => { 
          if ( item.mentorId == matchesArray[1].mentorId  ){ 
            return [ ...result, { ...item, mentees: [ ...item.mentees, this.menteeMap[ matchesArray[1].menteeId ] ] }  ];
          } else { 
            return [ ...result, item ];
          }
        }, [] );

      }
  }


}
