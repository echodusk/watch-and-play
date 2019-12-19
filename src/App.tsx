import * as React from "react";
import "semantic-ui-css/semantic.min.css";

import QuizzesContainer from "./components/QuizzesContainer/QuizzesContainer";

import { Quizzes, IQuizForm } from "./models/quiz/quizzes";

import { generateRandomId } from "./utils/randomId";
import { newQuiz } from "./utils/newQuiz";

import styles from "./App.module.css";
import VideoContainer from "./components/VideoContainer/VideoContainer";

export type IAppState = {
  quizzes: Quizzes[];
};

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    quizzes: [
      {
        id: generateRandomId(),
        question: "What's the current year?",
        answerA: "1990",
        answerB: "2019",
        correctAnswer: 2,
        active: false,
        editing: false
      },
      {
        id: generateRandomId(),
        question: "Which one is not a JS Lib?",
        answerA: "Spring",
        answerB: "React",
        correctAnswer: 2,
        active: false,
        editing: false
      },
      {
        id: generateRandomId(),
        question: "What's better?",
        answerA: "Smash",
        answerB: "Jump Force",
        correctAnswer: 1,
        active: true,
        editing: false
      }
    ]
  };

  public onActiveHandler = (id: string): void => {
    const { quizzes } = this.state;
    const filteredQuizzes = quizzes.map(quiz => {
      if (quiz.id === id) {
        quiz.active = true;
        return quiz;
      }
      quiz.active = false;
      return quiz;
    });

    this.setState({ quizzes: filteredQuizzes });
  };

  public onQuizEdit = (form: IQuizForm, id: string) => {
    this.setState(prevState => {
      const updatedQuizzes = prevState.quizzes.map(q => {
        if (q.id === id) {
          q.question = form.question;
          q.answerA = form.answerA;
          q.answerB = form.answerB;
          q.correctAnswer = form.correctAnswer!;
        }
        return q;
      });

      return { quizzes: updatedQuizzes };
    });
  };

  public onQuizSubmit = (form: IQuizForm): void => {
    const Quiz = newQuiz(form);
    this.setState(prevState => ({ quizzes: [...prevState.quizzes, Quiz] }));
  };

  public onDeleteQuiz = (id: string): void => {
    this.setState(prevState => ({
      quizzes: [...prevState.quizzes.filter(quiz => quiz.id !== id)]
    }));
  };

  public render() {
    return (
      <main className={styles.App}>
        <VideoContainer />
        <QuizzesContainer
          handleEdit={this.onQuizEdit}
          handleActive={this.onActiveHandler}
          handleDelete={this.onDeleteQuiz}
          handleSubmit={this.onQuizSubmit}
          quizzes={this.state.quizzes}
        />
      </main>
    );
  }
}

export default App;
