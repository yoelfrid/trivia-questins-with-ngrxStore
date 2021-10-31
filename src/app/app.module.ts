import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { AnswersComponent } from './ansers/answers.component';


import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';
import { TriviaSlideComponent } from './trivia-slide/trivia-slide.component';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    TriviaGameComponent,
    TriviaSlideComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    RippleModule,
    CardModule,
    // StoreModule.forRoot(fromApp.appReducer),
    // StoreDevtoolsModule.instrument({logOnly: environment.production}),
    // EffectsModule.forRoot([QuestionsEffects]),

    // StoreModule.forRoot(fromApp.appReducer),
    // StoreDevtoolsModule.instrument({logOnly: environment.production}),
    // EffectsModule.forRoot([QuestionsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
