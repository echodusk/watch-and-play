export type Quizzes = {
  id: number;
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer;
  active: boolean;
};

export enum CorrectAnswer {
  First = 1,
  Second
}
