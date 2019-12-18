export type IAppProps = {};

export type IAppState = {
  quizzes: Quizzes[];
};

export type Quizzes = {
  questionA: string;
  questionB: string;
  correctAnswer: CorrectAnswer;
};

export enum CorrectAnswer {
  QuestionA = 1,
  QuestionB
}
