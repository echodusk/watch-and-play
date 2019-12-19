export type Quizzes = {
  id: string;
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer;
  active: boolean;
};

export type IQuizzForm = {
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer | null;
}

export enum CorrectAnswer {
  First = 1,
  Second
}

