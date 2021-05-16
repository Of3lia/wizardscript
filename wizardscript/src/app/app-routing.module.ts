import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSceneComponent } from './components/game-scene/game-scene.component';
import { LevelsMenuComponent } from './components/levels-menu/levels-menu.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full' },
  { path: 'main', component: MainComponent },
  { path: 'levels-menu', component: LevelsMenuComponent },
  { path: 'game-scene', component: GameSceneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }