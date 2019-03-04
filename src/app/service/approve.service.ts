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
export class ApproveService {

  constructor(
    private http: HttpClient,
  ) { 
  }

  approveMatch( assignment:mentorPair[] ){ 
    const endpointSuffix = `/emp/matcher/pairing/lock`;
    return this.http.put( environment.serviceEnpoint + endpointSuffix, assignment ).pipe(map( (response:any) => response.json()));
  };

  unapproveMatch( assignment:mentorPair[] ){ 
    const endpointSuffix = `/emp/matcher/pairing/unlock`;
    return this.http.put( environment.serviceEnpoint + endpointSuffix, assignment ).pipe(map( (response:any) => response.json()));
  };

  mentorLock( mentorId:string ){ 
    const endpointSuffix = `/emp/matcher/mentor/${mentorId}/unlock`;
    return this.http.put( environment.serviceEnpoint + endpointSuffix, {} ).pipe(map( (response:any) => response.json()));
  }
}

