export type Quizzes = {
  id: string;
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer;
  active: boolean;
  editing: boolean;
};

export type IQuizForm = {
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer | null;
}

export enum CorrectAnswer {
  First = 1,
  Second
}

