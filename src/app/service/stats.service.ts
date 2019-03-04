import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private http: HttpClient,
  ) { 
  }

  runMatch( threshold:number ){ 
    console.log(threshold)
    const endpointSuffix = `/emp/matcher/runmatch/${threshold}`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  };

  getSummaryCounts(){ 
    const endpointSuffix = `emp/matcher/summarycounts`;
    return this.http.get( environment.serviceEnpoint + endpointSuffix );
  }
}

