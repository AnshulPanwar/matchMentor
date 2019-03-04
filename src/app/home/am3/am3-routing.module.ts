import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatchPageComponent } from './match-page/match-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const Am3Routes: Routes = [ 
  { path: 'landing', component: LandingPageComponent },
  { path: 'match', component: MatchPageComponent },
  { path: 'profile', component: ProfilePageComponent },

  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];
