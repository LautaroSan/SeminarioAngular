import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymRankAboutComponent } from './GymRank-about/GymRank-about.component';
import { GymRankGymnastsComponent } from './GymRank-gymnasts/GymRank-gymnasts.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'gymnasts',
    pathMatch:'full'
  },
  {
    path:'gymnasts', 
    component: GymRankGymnastsComponent
  },
  {
    path:'about',
    component: GymRankAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
