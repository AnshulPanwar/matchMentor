import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeMainComponent } from './home/main/main.component';
import { Am3Routes } from './home/am3/am3-routing.module';

//Sub Routes

const routes: Routes = [ 
  { path: 'home', component: HomeMainComponent, children: Am3Routes },
  
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }