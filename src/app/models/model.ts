export interface ApiResponse {
  results: Question[],
  response_code: number
}

export interface Question {
  category: string,
  type: string,
  difficulty: string,  //  קושי
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}