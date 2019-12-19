import { IQuizForm, Quizzes } from "../models/quiz/quizzes";
import { generateRandomId } from "./randomId";

export function newQuiz(form: IQuizForm): Quizzes {
    const quizz =  {
        id: generateRandomId(),
        question: form.question,
        answerA: form.answerA,
        answerB: form.answerB,
        correctAnswer: form.correctAnswer!,
        active: false,
        editing: false,
    }

    return quizz;
}