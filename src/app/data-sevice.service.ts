import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './models/model';
import { ApiResponse } from 'src/app/models/model';
import { Observable, zip, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataSeviceService {
  count = 0
  constructor(private http: HttpClient) {
    this.setQuestions()
  }

  public questions$: Subject<Question[]> = new Subject<Question[]>()

  private partQuestions: Subject<ApiResponse[]> = new Subject<ApiResponse[]>()

  private allQuestions: Question[] = []

  //
  setQuestions() {
    if (this.allQuestions.length == 20) { //   כשיש לי את כל השאלות תעשה next
      for (let question of this.allQuestions) {
        this.sortAllAnswer(question)
        this.onAtob(question)
      }
      return this.questions$.next(this.allQuestions) // ותסיים
    }
    let subs = this.getQuestions(20 - this.allQuestions.length).subscribe((questions) => {
      console.log(questions);
      //questions.filter((i)=>!this.checkIfExists(i))
      for (let question of questions) {
        if (!(this.checkIfExists(question['results'][0].question))) {
          console.log(question['results'][0]);

          this.allQuestions.push(question['results'][0])
        }
      }
      this.setQuestions()
      subs.unsubscribe()
    })

  }

  checkIfExists(question: string) {
    for (let questionObj of this.allQuestions) {
      if (question == questionObj.question) {
        return true
      }
    }

    return false
  }

  getQuestions(numberOfQuestions: number) {
    let allq = [];
    for (let i = 0; i < numberOfQuestions; i++) {
      allq.push(this.getOneQuestions())
    }
    return zip(
      ...allq
    )
  }

  getOneQuestions() {
    return this.http.get<ApiResponse>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple')
  }

  // הוספת תשובה רביעת וערבוב המערך
  sortAllAnswer(singleQuestion: Question): Question {
    const index = Math.floor(Math.random() * 4)
    singleQuestion.incorrect_answers.splice(index, 0, singleQuestion.correct_answer)
    return singleQuestion
  }

  onAtob(singleQuestion: Question) {
    singleQuestion.question = atob(singleQuestion.question)

    singleQuestion.incorrect_answers = singleQuestion.incorrect_answers.map(x => atob(x));

  }


  // 

  // קבלת שאלות מ API
  getTriviaQuestion(): Observable<Question> {
    return this.http.get<ApiResponse>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple').pipe(
      map(x => {
        const singleQuestion = x.results[0]
        singleQuestion.question = atob(singleQuestion.question);
        // singleQuestion.correct_answer = atob(singleQuestion.correct_answer);
        // singleQuestion.incorrect_answers.push(singleQuestion.correct_answer)
        this.sortAllAnswer(singleQuestion)
        singleQuestion.incorrect_answers = singleQuestion.incorrect_answers.map(a => atob(a))
        return singleQuestion
      })
    );
  }



  // הוספת השאלות למערך והעברה לקומפוננטה
  async getUniquQuestion(count: number): Promise<Question[]> {
    console.log("hj");

    const result: Question[] = []
    while (result.length < count) {
      const q = await this.getTriviaQuestion().toPromise();
      console.log(q);

      // if(result.some(x => q.question !== x.question)){
      //   console.log("ff");
      // }
      result.push(q)

    }
    return result;
  }




}








 // questionsAndAnsewrs(index:number):Observable<ApiResponse> {
  //     return this.http.get<ApiResponse>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple');
  //     }

  // questionExist(oneQuestion$: any): boolean {
  //   return this.questions$.some(x => x.pipe.o == x.oneQuestion$);

  //   return this.questions$.some(x => x == x);
  // }

  // getData() {
  //   // return this.http.get<Question>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple');
  //   return this.http.get<ApiResponse>('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple');

  // }


// interface ApiResponse {
//   results: Question[],
//   response_code: number
// }

// interface Question {
//   category : string,
//   type: string,
//   difficulty : string ,
//   question: string ,
//   correct_answer: string ,
//   incorrect_answers : string[]
// }

