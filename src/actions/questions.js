export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function questionAnswer (info) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser: info.authedUser,
    qid: info.qid,
    answer: info.answer
  }
}

export function addQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}
