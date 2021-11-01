import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';

const routes: Routes = [
  { path: '', component: TriviaGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }