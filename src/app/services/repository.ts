import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Question } from 'src/app/models/model';
import { Observable, zip, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setQuestions } from '../store/action';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
    private readonly URL = "https://opentdb.com/api.php?amount=1&encode=base64&type=multiple";
    constructor(private http: HttpClient) {
  }

  

  getOneQuestions() {
    return this.http.get<ApiResponse>(this.URL)
  }
}