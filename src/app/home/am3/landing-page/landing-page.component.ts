import {
  Component,
  OnInit
} from '@angular/core';
import {
  GlobalState
} from 'src/app/global.state';
import {
  StatsService
} from 'src/app/service/stats.service';

@Component({
  selector: 'am3-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public totalMatches: number = 0;
  public unpairedMentees: number = 0;
  public unpairedMentors: number = 0;
  public approvedPairings: number = 0;
  public unapprovedPairings: number = 0;
  public threshold: number = 1;
  public loading: boolean = false;

  constructor(
    private globalState: GlobalState,
    private statsService: StatsService
  ) {

  }

  ngOnInit() {
    this.globalState.toggle('sidenav.forcedCollapseMode');
    this.getSummaryCounts();
  }

  runMatch() {
    this.loading = true;
    this.globalState.notifyDataChanged('loading', true);
    this.statsService.runMatch(this.threshold).subscribe((response:any) => {
      this.loading = false;
      if (response) {
        this.getSummaryCounts();
      } else {
        console.log(`[runMatch] ${response.detail}`);
        this.globalState.notifyDataChanged('loading', false);
      }
    });
  }

  getSummaryCounts() {
    this.statsService.getSummaryCounts().subscribe((response:any) => {
      console.log( response );
        const {
          totalMatches,
          unpairedMentees,
          unpairedMentors,
          approvedPairings,
          unapprovedPairings,
          threshold
        } = response;
        this.totalMatches = totalMatches;
        this.unpairedMentees = unpairedMentees;
        this.unpairedMentors = unpairedMentors;
        this.approvedPairings = approvedPairings;
        this.unapprovedPairings = unapprovedPairings;
        this.threshold = threshold;
    
      this.globalState.notifyDataChanged('loading', false);
    });
  }

  onInputChange(event: any) {
    this.threshold = event.value;
    console.log("this is event", event.value)
  }

}
