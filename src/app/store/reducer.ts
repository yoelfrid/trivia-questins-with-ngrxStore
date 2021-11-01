import { createReducer, on } from "@ngrx/store";
import { Question } from "../models/model";
import { cleerQuestions, setQuestions } from "./action";

export interface State{
    questions:Question[]
}

export const initialState: State = {
    questions:[]
};




export const questionsReducer = createReducer(
    initialState,
    on(setQuestions, (state ,dataQuestion)=> {

        let questions = [...state.questions]
        // console.log('reducer',questions);
            questions.push(dataQuestion.question);
            
         return {...state,questions}
         }),
    // on(cleerQuestions, state => ({ ...state,questions:[] })),
  
);  