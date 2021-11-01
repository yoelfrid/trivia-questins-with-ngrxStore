import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { ApiResponse } from './models/model';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs'
import { DataSeviceService } from './services/data-sevice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TriviaQuestions';
  // ditels: any
  // oneQuestion: any
  // answers: any[] = []
  // correctAnswer: string = ''
  // start: boolean = false

  // possibleAnswers: any[] = [] 
  // questions: ApiResponse[] = []
  // correntQustion: any;  

  // counter = 0;    
  // counteFalse = 0;   
  // timer: number;
  // timerLimit = 20;
  // timerSub: Subscription;

  constructor(private dataSreve: DataSeviceService) { }
  
  ngOnInit() {

  }













}



















  // numbers = interval(1000).pipe(take(this.timerLimit));




  // next() {
  //   console.log(this.questions.length);
  //   this.counter++
  //   this.correntQustion = this.questions[this.counter]
  //   console.log(this.correntQustion);
  // }

  // getText(an: string) {
  //   return atob(an)
  // }

  // getData() {
  //   this.questions.forEach(element => {
  //     element.results[0].category
  //   });
  // }

  // shuffle(array: any[]) {
  //   return array.sort(() => Math.random() - 0.5);
  // }

  // setData(event: string) {
  //   console.log(event);
  //   if (this.correntQustion != undefined && this.correntQustion.results[0].correct_answer != event) {
  //     console.log("false");
  //     this.counteFalse++
  //     if (this.counteFalse == 3) {
  //       this.counter++
  //       this.correntQustion = this.questions[this.counter]
  //       this.counteFalse = 0

  //       this.timerSub.unsubscribe();
  //       this.timerSub = interval(1000).pipe(take(20))
  //         .subscribe(x => this.timer = this.timerLimit - x);
  //     }
  //   }
  //   else if (this.correntQustion != undefined && this.correntQustion.results[0].correct_answer == event) {
  //     console.log("true");
  //     this.counter++
  //     this.correntQustion = this.questions[this.counter]
  //     this.counteFalse = 0;

  //     this.timerSub.unsubscribe();
  //     this.timerSub = interval(1000).pipe(take(20))
  //       .subscribe(x => this.timer = this.timerLimit - x);
  //   }
  // }

  // ngOnInit() {
    // this.dataSreve.questionsAndAnsewrs().forEach((question$: Observable<ApiResponse>) => question$.subscribe(res => {
      // res.results[0].incorrect_answers.push(res.results[0].correct_answer)    // להוסיף את התשובה הנכונה למערך התשובות

      // console.log(res.results[0].question = atob(res.results[0].question));  // פונקציית atob לשאלות
      

      // this.questions.push(res);
      // this.correntQustion = this.questions[0]
    // })

    // )
    // console.log(this.questions);

    // this.timerSub = this.numbers.subscribe(x => {
  
      // console.log(this.timerSub);
      // this.timer = this.timerLimit - x;

    // });
     
    
    //  this.correntQustion.results[0].correct_answer

    // this.answers = this.correntQustion.results[0].incorrect_answers
  // }

  //     this.dataSreve.questionsAndAnsewrs().forEach((question$: Observable<ApiResponse>) => question$.subscribe(res => {
  //       let question = res.results;
  //       console.log(question);

  //       // this.answers.push(question)
  //       this.questions.push(res);
  //       // console.log( this.answers[0]);

  //       // console.log( this.answers[0]);
  //     })

  //     )
  //     this.correntQustion = this.questions[0]
  // console.log(this.correntQustion);

  //   }







  // questionExist(question: any): boolean {
  //   return this.questions.some(x => x.question == x.question);
  // }

  // getData() {
  //   this.dataSreve.getData().subscribe(val => {
  //     let question = val.results[0];

  //     console.log("val ", atob(question.question));


  //     this.oneQuestion = this.getText(question.question)

  //     // console.log(this.ansers = question.incorrect_answers);

  //     this.questions.push(question);

  //     this.possibleAnswers = question.incorrect_answers.map(x => atob(x))
  //     this.correct_answer = this.getText(question.correct_answer)

  //     this.possibleAnswers.push(this.correct_answer)
  //     this.possibleAnswers.forEach(a => {
  //       console.log(a);

  //     })
  //   }
  //   )
  // }












  // a(anser: string) {
  //   console.log(this.correct_answer);
  //   if (anser == this.correct_answer) {
  //     console.log(true);

  //   }
  //   else {
  //     console.log(false);

  //   }
  // }

  // getSelectedAnswerׂׂׂ(anser: string) {
  //   console.log(this.correct_answer);

  //   if (anser == this.correct_answer) {

  //   }
  //   else{

  //   }
  // }



// getData(){
//   this.dataSreve.detData().subscribe(val => {
//     let question = val.results[0];
//     console.log("val " , atob(question.question));

//     // if(!this.questionExist(question)){
//       console.log("val " , atob(question.question));
//       this.oneQuestion = atob(question.question)

//       // this.ansers =  question.incorrect_answers.map(x => 
//       //   console.log(atob(x)));
//         console.log(this.ansers = question.incorrect_answers);

//       // this.oneQuestion = question  
//       // this.ansers =  question.   
//       this.questions.push(question);
//       console.log("aaa");
//     // } 
//     // else {

//     // }
//     // console.log(this.questions);



//     // const possibleAnswers = question.incorrect_answers.map(x => atob(x))

//     // possibleAnswers.push(atob(question.correct_answer))
//     // possibleAnswers.forEach(a => {
//     //   console.log(a);

//     // })
//     // this.ditels = val
//   }

 // ngOnInit() {

  //     for (let i = 0; i < this.dataSreve.questionsAndAnsewrs().length; i++) {        
  //       this.dataSreve.questionsAndAnsewrs()[i].subscribe(res => {
  //         res.results[0].incorrect_answers.push(res.results[0].correct_answer)          
  //         this.questions.push(res);
  //         console.log( this.questions.length);
  //         this.correntQustion = this.questions[0]
  //       })

  //     }

  //   // })


  // }