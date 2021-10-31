import { Component, OnInit, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { DataSeviceService } from '../data-sevice.service';
import { ApiResponse, Question } from '../models/model';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.scss']
})
export class TriviaGameComponent implements OnInit {

  constructor(private dataSreve: DataSeviceService, private primengConfig: PrimeNGConfig) { }

  @ViewChild(Carousel) carousel: Carousel;
  questionsAndAnswer: Question[] = []
  // isCorrectAnswer = false
  // counter: number = 0
  countQuestion = 0
  someCorrectAnswers = 0
  someIncorrectAnswers = 0
  someTimeOut = 0
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // this.loadQuestions();

    this.dataSreve.questions$.subscribe(event => {
      this.questionsAndAnswer = [...event];
      console.log(event);
    })
    this.carousel.navForward(1);
  }

  // קבלת השאלות מהסרוויס ואתחול השאלה הראשונה
  // async loadQuestions() {

  //   this.questionsAndAnswer = await this.dataSreve.getUniquQuestion(20);
  //   // this.dataSreve.questions$.subscribe(eventw=>{
  //   //   console.log(eventw);
  //   this.nextQuestion(event);
  // }


  // העלאת שאלה נוספת
  nextQuestion(event: any): void {
    console.log(event['reason']);
    if (event['reason'] == 'correct answer') {
      this.someCorrectAnswers++
      this.carousel.navForward(1);
    }
    if (event['reason'] == 'incorrect answer') {
      this.someIncorrectAnswers++
      this.carousel.navForward(1);
    }
    // this.carousel.navForward(1);
    this.countQuestion++
    if (this.countQuestion == 20) {
      console.log("You've finished the trivia game");

    }
    // this.carousel.navForward(1);
  }

}



    // const interval = setInterval(() => {
    //   this.nextQuestion();
    //   this.counter++

    //   if (this.counter >= 5) {
    //     clearInterval(interval)
    //     this.counter = 0;
    //     // this.counteFalse = 0
    //     // this.finish.emit({ succsess: false, reason: 'timeout', timeout: this.counter })

    //     // console.log("interval",this.counter);
    //   } 
    // }, 1000);



    // this.dataSreve.triviaQuestion().forEach((question$: Observable<ApiResponse>) => question$.pipe(
    //   pluck('results'),
    //   map(results => results[0])
    // )
    //   .subscribe(result => {
    //     // console.log(result);
    //     // result
    //     // this.incorrectAnswers.push(result.correct_answer)
    //     // result.incorrect_answers.push(result.correct_answer)

    //     this.questionsAndAnswer.push(this.sortAllAnswer(result))


    //   })
    // )

    // this.triviaQuestions = ["aaa", "bbb", "ccc"]; // question.service 



  // sortAllAnswer(result: Question): Question {
  //   const index = Math.floor(Math.random() * 4)
  //   result.incorrect_answers.splice(index, 0, result.correct_answer)
  //   return result
  // }





  // ngOnInit() {
  //   this.dataSreve.questionsAndAnsewrs().forEach((question$: Observable<ApiResponse>) => question$.subscribe(res => {
  //     res.results[0].incorrect_answers.push(res.results[0].correct_answer)    // להוסיף את התשובה הנכונה למערך התשובות

  //     console.log(res.results[0].question = atob(res.results[0].question));  // פונקציית atob לשאלות

  //     // this.possibleAnswers = question.incorrect_answers.map(x => atob(x))

  //     this.questions.push(res);
  //     this.correntQustion = this.questions[0]
  //   })

  //   )
  //   console.log(this.questions);

  //   this.timerSub = this.numbers.subscribe(x => {

  //     console.log(this.timerSub);
  //     this.timer = this.timerLimit - x;

  //   });


  //   //  this.correntQustion.results[0].correct_answer

  //   // this.answers = this.correntQustion.results[0].incorrect_answers
  // }

