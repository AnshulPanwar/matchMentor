import { GlobalState } from './../../global.state';
import {
  Component, 
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'am3-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SideNavComponent implements OnInit {
  
  @Input() navArray = [];

  @ViewChild('sidenav') sidenav;
  
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.toggleSideNav()
  }
	public currentFragment;
  forcedCollapseMode: boolean = false;
  loading: boolean = true;
  
  constructor(
		private globalState: GlobalState,
		private router: Router
  ) { }

  ngOnInit() {
    //Force Collapse side bar 
    this.globalState.subscribe( 'sidenav.forcedCollapseMode', ( _data )=> {
      this.forcedCollapseMode = _data || true;
      this.sidenav.opened = false;
    } );
    this.globalState.subscribe( 'sidenav.toggleSideNav', ( _data )=> {
      this.sidenav.toggle();
    } );
    this.globalState.subscribe( 'loading', data => { 
      this.loading = data;
		} );
		
		this.router.events.subscribe((event) => {
			if(event instanceof NavigationEnd ) {
				this.currentFragment = event.url.match( /.\#+(.+)$/ )?  event.url.match( /.\#+(.+)$/ )[1]: '';
			}
		});
  }


  ngAfterContentInit():void {
    this.toggleSideNav();
  }



  /**
   * Close the side Nav panel after conditions are checked
   */
  closeSideNav():boolean{ 
    return this.shouldUseCollapseMode() && ( this.sidenav.opened = false );
  }



  /**
   * Determine if the sidenav should be collapsed
   */
  shouldUseCollapseMode():boolean{ 
    return window.innerWidth < 840 || this.forcedCollapseMode ;
  }



  /**
   * Action of toggling the sidenav
   */
  toggleSideNav():void{ 
    const isSmallView = this.shouldUseCollapseMode();
    if ( !isSmallView ) {
      this.sidenav.mode = "side"
      this.sidenav.opened = true
    } else {
      this.sidenav.mode = 'over'
      this.sidenav.opened = false
    }    
  }
}