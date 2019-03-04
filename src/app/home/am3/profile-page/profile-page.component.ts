import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  GlobalState
} from 'src/app/global.state';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';
import { ProfileComponent } from 'src/app/dialog/profile/profile.component';
import { MatDialog } from '@angular/material';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'am3-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public queryParam: string;
  public leftList: object[];
  public rightList: object[];
  public selectedMentorId: number;
  public selectedMenteeId: number;
  public participantType:string;
  public unassingedMentees: object[];
  public unassignedMentors: object[];

  @Input() mentorId:number;


  constructor(
    private globalState: GlobalState, private activatedRoute: ActivatedRoute, private dialog: MatDialog, private matchService:MatchService
  ) {}

  selectValue(event){
    console.log(event)
    this.selectedMentorId = event;
    console.log("this is mentor Id from list: " , this.selectedMentorId)
  }

  selectedValue(event){
    this.selectedMenteeId = event;
    console.log("this is the mentee id:", this.selectedMenteeId)
  }

  ngOnInit() {
    
    this.getUnassignedMentees()
    this.getUnassignedMentors()

    console.log("this is unassigned mentors:", this.unassignedMentors);
    console.log("this is unassigned mentees:", this.unassingedMentees);


    // console.log(this.mentorId)
    this.globalState.toggle('sidenav.forcedCollapseMode');
    this.globalState.notifyDataChanged('loading', false);

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      console.log("My hash fragment is here => ", fragment)
      this.queryParam = fragment;
      this.participantType = fragment;


      if (fragment == 'mentee') {
        // this.leftList = this.menteeList;

        // this.rightList = this.mentorList;
        this.getUnassignedMentees();
        this.matchService.getUnmatched().subscribe( response=> { 
          console.log( response );
        });
      } else {
        this.matchService.getUnmatched().subscribe( response=> { 
          console.log( response );
        });
      }
    })
  }

  public getUnassignedMentees(){
    this.matchService.getUnmatchedMentees().subscribe((response:any) => {
      console.log("this is the response: ",response);
      this.unassingedMentees = response;
        console.log("this is unassigned: ",this.unassingedMentees);
    })
  }



  public getUnassignedMentors(){
    this.matchService.getUnmatchedMentors().subscribe((response: any) => {

      console.log("this is the response for mentors:", response);
      this.unassignedMentors = response;
    })
  }














  public candidateList: object[] = [
    {
        "id": 1166,
        "type": "MULTI_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 8,
            "type": "PROFILE",
            "description": "Are a  member of an ERG?  Check all that apply",
            "responseType": "MULTI_SELECT"
        },
        "scorablePreference": null,
        "answers": []
    },
    {
        "id": 1169,
        "type": "MULTI_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 14,
            "type": "SCORABLE_PREF",
            "description": "Would you like to be paired with someone who is a member of an ERG?",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "scorablePreference": {
            "id": 14,
            "type": "SCORABLE_PREF",
            "description": "Would you like to be paired with someone who is a member of an ERG?",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "answers": [
            {
                "id": 36,
                "type": "PREDEFINED",
                "value": "No Preference"
            }
        ]
    },
    {
        "id": 1170,
        "type": "MULTI_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 15,
            "type": "SCORABLE_PREF",
            "description": "Career Pathing :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "scorablePreference": {
            "id": 15,
            "type": "SCORABLE_PREF",
            "description": "Career Pathing :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "answers": [
            {
                "id": 4,
                "type": "PREDEFINED",
                "value": "Networking"
            },
            {
                "id": 37,
                "type": "PREDEFINED",
                "value": "Career Path - short term (i.e. the next step)"
            },
            {
                "id": 6,
                "type": "PREDEFINED",
                "value": "Career Path - long term (i.e. a 5 year plan)"
            }
        ]
    },
    {
        "id": 1171,
        "type": "MULTI_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 16,
            "type": "SCORABLE_PREF",
            "description": "EAB Knowledge :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "scorablePreference": {
            "id": 16,
            "type": "SCORABLE_PREF",
            "description": "EAB Knowledge :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "answers": [
            {
                "id": 38,
                "type": "PREDEFINED",
                "value": "Adult Learner Recruitment:EAB Knowledge"
            },
            {
                "id": 39,
                "type": "PREDEFINED",
                "value": "Advancement:EAB Knowledge"
            },
            {
                "id": 40,
                "type": "PREDEFINED",
                "value": "Academic Performance Solutions:EAB Knowledge"
            },
            {
                "id": 41,
                "type": "PREDEFINED",
                "value": "Commercial - Marketing:EAB Knowledge"
            },
            {
                "id": 42,
                "type": "PREDEFINED",
                "value": "Commercial - Member/client development (sales):EAB Knowledge"
            },
            {
                "id": 43,
                "type": "PREDEFINED",
                "value": "Firm Services:EAB Knowledge"
            },
            {
                "id": 44,
                "type": "PREDEFINED",
                "value": "Research:EAB Knowledge"
            },
            {
                "id": 45,
                "type": "PREDEFINED",
                "value": "Student Success Management Systems:EAB Knowledge"
            },
            {
                "id": 46,
                "type": "PREDEFINED",
                "value": "Undergrad Enrollment Services:EAB Knowledge"
            },
            {
                "id": 47,
                "type": "PREDEFINED",
                "value": "Other - Write In:EAB Knowledge"
            }
        ]
    },
    {
        "id": 1172,
        "type": "MULTI_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 17,
            "type": "SCORABLE_PREF",
            "description": "Skill and Competencies :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "scorablePreference": {
            "id": 17,
            "type": "SCORABLE_PREF",
            "description": "Skill and Competencies :: Areas of Development",
            "responseType": "MULTI_SELECT",
            "weight": 1
        },
        "answers": [
            {
                "id": 48,
                "type": "PREDEFINED",
                "value": "Building Relationships:Skills and Competencies:"
            },
            {
                "id": 49,
                "type": "PREDEFINED",
                "value": "Communication:Skills and Competencies:"
            },
            {
                "id": 50,
                "type": "PREDEFINED",
                "value": "Change Management:Skills and Competencies:"
            },
            {
                "id": 51,
                "type": "PREDEFINED",
                "value": "Managing Time and Priorities:Skills and Competencies:"
            },
            {
                "id": 52,
                "type": "PREDEFINED",
                "value": "Navigating the Organization:Skills and Competencies:"
            },
            {
                "id": 53,
                "type": "PREDEFINED",
                "value": "People Management:Skills and Competencies:"
            },
            {
                "id": 54,
                "type": "PREDEFINED",
                "value": "Strategic Impact:Skills and Competencies:"
            },
            {
                "id": 55,
                "type": "PREDEFINED",
                "value": "Technical and Functional Skills - Write In:Skills and Competencies:"
            },
            {
                "id": 56,
                "type": "PREDEFINED",
                "value": "Other - Write In:Skills and Competencies:"
            }
        ]
    },
    {
        "id": 1164,
        "type": "WRITE_IN",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 1,
            "type": "PROFILE",
            "description": "Name",
            "responseType": "WRITE_IN"
        },
        "answer": "Elissa Paullin",
        "description": "Elissa Paullin"
    },
    {
        "id": 1165,
        "type": "WRITE_IN",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 2,
            "type": "PROFILE",
            "description": "Gender",
            "responseType": "WRITE_IN"
        },
        "answer": "Female",
        "description": "Female"
    },
    {
        "id": 1167,
        "type": "WRITE_IN",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 9,
            "type": "SCORABLE_PREF",
            "description": "Would you like to be paired with someone of a specific gender?",
            "responseType": "WRITE_IN",
            "weight": 2
        },
        "answer": "No preference",
        "description": "No preference"
    },
    {
        "id": 1173,
        "type": "WRITE_IN",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 18,
            "type": "PROFILE",
            "description": "E-mail Address",
            "responseType": "WRITE_IN"
        },
        "answer": "kchicco0@uol.com.br",
        "description": "kchicco0@uol.com.br"
    },
    {
        "id": 1174,
        "type": "WRITE_IN",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 19,
            "type": "PROFILE",
            "description": "How many mentees are you able to work with in the upcoming season? (Jan - June)",
            "responseType": "WRITE_IN"
        },
        "answer": "2.0",
        "description": "2.0"
    },
    {
        "id": 1168,
        "type": "SINGLE_SELECT",
        "respondent": {
            "id": 98,
            "type": "MENTOR",
            "name": "Elissa Paullin",
            "emailAddress": "kchicco0@uol.com.br",
            "status": "UNLOCKED",
            "maxMentees": 1
        },
        "question": {
            "id": 10,
            "type": "SCORABLE_PREF",
            "description": "Would you like to be paired with someone in your same location?",
            "responseType": "SINGLE_SELECT",
            "weight": 2
        },
        "scorablePreference": {
            "id": 10,
            "type": "SCORABLE_PREF",
            "description": "Would you like to be paired with someone in your same location?",
            "responseType": "SINGLE_SELECT",
            "weight": 2
        },
        "answer": {
            "id": 1,
            "type": "PREDEFINED",
            "value": "Yes, I prefer someone from my office"
        },
        "comparison": "EQUAL_TO"
    }
  ];
  
  
}

