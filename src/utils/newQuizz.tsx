import { IQuizzForm, Quizzes } from "../models/quiz/quizzes";
import { generateRandomId } from "./randomId";

export function newQuizz(form: IQuizzForm): Quizzes {
    const quizz =  {
        id: generateRandomId(),
        question: form.question,
        answerA: form.answerA,
        answerB: form.answerB,
        correctAnswer: form.correctAnswer!,
        active: false
    }

    return quizz;
}