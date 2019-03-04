import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NAV_OPTIONS } from '../nav-options.model';


@Component({
  selector: 'am3-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeMainComponent implements OnInit {

  navArray = NAV_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}