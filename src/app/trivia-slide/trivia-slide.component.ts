import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/model';
import { ThisReceiver } from '@angular/compiler';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-trivia-slide',
  templateUrl: './trivia-slide.component.html',
  styleUrls: ['./trivia-slide.component.scss']
})
export class TriviaSlideComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {

  }

  @Input() triviaQuestion: Question
  @Output() finish = new EventEmitter<any>()

  counter = 0;
  counteFalse = 0;
  ngOnInit(): void {

    this.primengConfig.ripple = true;
  }


// בחירת התשובה
  answerSelected(e: any) {
    console.log(this.counteFalse);

    const correctAnswer = atob(this.triviaQuestion.correct_answer)
    if (correctAnswer == e) {
      console.log("תשובה נכונה");
      this.finish.emit({ succsess: true, reason: 'correct answer' })
      this.counteFalse = 0
    }
    if (correctAnswer != e) {
      console.log("תשובה לא נכונה");
      this.counteFalse++;

      if (this.counteFalse == 3) {
        console.log("3 פעמים תשובות שגויות");

        this.finish.emit({ succsess: false, reason: 'incorrect answer' })
        this.counteFalse = 0;
      }
      // this.finish.emit({ succsess: false, reason: 'incorrect answer'})
    }
  }



}
