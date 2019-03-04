import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopAppBarComponent } from './custom-components/top-app-bar/top-app-bar.component';

import { SideNavComponent } from './custom-components/side-nav/side-nav.component';
import { Ng2OdometerModule } from 'ng2-odometer'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';

//Angular Material Components
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialog,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
  MatChipsModule,
  MatStepperModule,
  MatSelectModule,
  MatListModule

} from '@angular/material';

//Home Components
import { HomeMainComponent } from './home/main/main.component';
import { GlobalState } from './global.state';
import { LandingPageComponent } from './home/am3/landing-page/landing-page.component';
import { MatchPageComponent } from './home/am3/match-page/match-page.component';
import { ProfilePageComponent } from './home/am3/profile-page/profile-page.component';
import { PageHeaderComponent } from './custom-components/page-header/page-header.component';
import { StatsComponentComponent } from './custom-components/stats-component/stats-component.component';
import { MatchTreeComponent } from './custom-components/match-tree/match-tree.component';
import { HttpClientModule } from '@angular/common/http';
import { PendingListComponent } from './custom-components/pending-list/pending-list.component';
import { PendingItemComponent } from './custom-components/pending-item/pending-item.component';
import { CandidateListLeftComponent } from './custom-components/candidate-list-left/candidate-list-left.component';
import { CadidateListRightComponent } from './custom-components/cadidate-list-right/cadidate-list-right.component';
import { ScoreCardComponent } from './custom-components/score-card/score-card.component';
import { CandidateResponseComponent } from './custom-components/candidate-response/candidate-response.component';
import { ScoreCardRightComponent } from './custom-components/score-card-right/score-card-right.component';
import { ProfileComponent } from './dialog/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopAppBarComponent,
    SideNavComponent,
    HomeMainComponent,
    HomeMainComponent,
    LandingPageComponent,
    MatchPageComponent,
    ProfilePageComponent,
    StatsComponentComponent,
    PageHeaderComponent,
    MatchTreeComponent,
    PendingListComponent,
    PendingItemComponent,
    CandidateListLeftComponent,
    CadidateListRightComponent,
    ScoreCardComponent,
    CandidateResponseComponent,
    ScoreCardRightComponent,
    ProfileComponent
  ],

  entryComponents: [
    ProfileComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DragDropModule,
    //Angular Material Components
    MatButtonModule,
    MatCardModule,
    Ng2OdometerModule.forRoot(),
    MatCheckboxModule,
    MatChipsModule,
    // MatDialog,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatListModule,

    HttpClientModule
  ],
  providers: [
    GlobalState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
