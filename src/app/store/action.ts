import { createAction, props } from "@ngrx/store";
import { Question } from "../models/model";

// action
export const setQuestions = createAction(
    '[QUESTIONS] set questions',
    props<{question:Question}>()
  );

  export const cleerQuestions = createAction(
    '[QUESTIONS] cleer Questions'
  );


  