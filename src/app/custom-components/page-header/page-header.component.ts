import { Component, HostListener, Input, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { GlobalState } from "../../global.state";
import { trigger, state, animate, transition, style } from "@angular/animations";

@Component({
  selector: "am3-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("sideNavRemoved", [
      state("false" , style({ "margin-left":"0" })),
      state("true", style({ "margin-left":"24rem"  })),
      transition("1 => 0", animate("100ms ease-out")),
      transition("0 => 1", animate("300ms ease-out"))
    ])
  ]
})
export class PageHeaderComponent {

  @Input() label: string = "";
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.determineShowMenuToggle()
  }

  sidenavOpened:boolean = false;
  forcedCollapseMode: boolean = false;

  //Detemines the hamburger menu should be shown
  showToggle: boolean = false;

  constructor( 
    private globalState: GlobalState
  ) { 
    this.globalState.subscribe( "sidenav.forcedCollapseMode", ( _data )=> {
      this.forcedCollapseMode = _data || true;
      this.determineShowMenuToggle();
    } );
    this.determineShowMenuToggle();
  }



  /**
   * Toggles the side nav
   */
  toggleSideNav():void{ 
    this.globalState.toggle( "sidenav.toggleSideNav" );
  }



  /**
   * Determines if the panel should be collapse to allow for specific pages that collapse panel on default
   */
  shouldUseCollapseMode():boolean{ 
    return window.innerWidth < 840 || this.forcedCollapseMode ;
  }



  /**
   * Determine if the show menu toggle should be shown
   */
  determineShowMenuToggle():void{ 
    this.showToggle = this.shouldUseCollapseMode();
  }
}