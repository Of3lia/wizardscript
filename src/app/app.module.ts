import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { UnitComponent } from './components/unit/unit.component';
import { ConsoleComponent } from './components/console/console.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LevelsMenuComponent } from './components/levels-menu/levels-menu.component';
import { MainComponent } from './components/main/main.component';
import { GameSceneComponent } from './components/game-scene/game-scene.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
 
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    UnitComponent,
    ConsoleComponent,
    LevelsMenuComponent,
    MainComponent,
    GameSceneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    NgbModule,
    [LottieModule.forRoot({ player: playerFactory, useCache: true })],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
