import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymnastsListComponent } from './gymnast-list/gymnasts-list.component';
import { gymnastsRankComponent } from './gymnasts-rank/gymnasts-rank.component';
import { FormsModule } from '@angular/forms';
import { GymRankGymnastsComponent } from './GymRank-gymnasts/GymRank-gymnasts.component';
import { GymRankAboutComponent } from './GymRank-about/GymRank-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    GymnastsListComponent,
    gymnastsRankComponent,
    GymRankGymnastsComponent,
    GymRankAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
