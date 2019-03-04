import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


export class mentorPair{ 
  mentor_id:string;
  mentee_id:string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private http: HttpClient,
  ) { 
  }

  //@TODO
  addNewMatch( matchArray: mentorPair[] ){ 
    const endpointSuffix = `/emp/matcher/pairing/assign`;
    return this.http.post( environment.serviceEnpoint + endpointSuffix, matchArray );
  };

  removeMatch( matchArray: mentorPair[] ){ 
    const endpointSuffix = `/emp/matcher/pairing/unassign`;
    return this.http.post( environment.serviceEnpoint + endpointSuffix, matchArray );
  };

 setNote( mentor_id: number, mentee_id: number, note: string ){ 
    const endpointSuffix = `/emp/matcher/note/${mentor_id}/${mentee_id}/`;
    return this.http.put( environment.serviceEnpoint + endpointSuffix, { note } );
  };

  getMatch( lockstatus = "UNLOCKED" ){ 
    const endpointSuffix = `/emp/matcher/currentassignments/${lockstatus}`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

  getUnmatched(){
    const endpointSuffix = `/emp/matcher/unmatchedmentees/`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

  getUnmatchedMentors(){
    const endpointSuffix = `/emp/matcher/unmatchedmentors/`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

  getUnmatchedMentees(){
    const endpointSuffix = `/emp/matcher/unmatchedmentees/`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

  getUnmatchedByPerson( id:number ){
    const endpointSuffix = `/emp/matcher/unmatchedmentees/${id}`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

  getResponsesByPerson( id ){
    const endpointSuffix = `/emp/profile/responses/${id}`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }

}

