import * as React from "react";
import "semantic-ui-css/semantic.min.css";

import { Header } from "semantic-ui-react";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";

import styles from "./App.module.css";
import { Quizzes } from "./models/quiz/quizzes";

export type IAppProps = {};

export type IAppState = {
  quizzes: Quizzes[];
};

class App extends React.Component<IAppProps, IAppState> {
  state: IAppState = {
    quizzes: [
      {
        id: 1,
        question: "What's the current year?",
        answerA: "1990",
        answerB: "2019",
        correctAnswer: 2,
        active: false
      },
      {
        id: 2,
        question: "Which one is not a JS Lib?",
        answerA: "Spring",
        answerB: "React",
        correctAnswer: 2,
        active: false
      },
      {
        id: 3,
        question: "What's better?",
        answerA: "Smash",
        answerB: "Jump Force",
        correctAnswer: 1,
        active: true
      },
    ]
  };

  public render() {
    return (
      <main className={styles.App}>
        <section className={styles.mainDisplay}>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          Learn React
        </section>
        <section className={styles.mainQuizzes}>
          <article className={styles.quizContainer}>
            <Header textAlign="left" as="h4">
              Trivia questions
            </Header>
            <CardsContainer quizzes={this.state.quizzes} />
          </article>
        </section>
      </main>
    );
  }
}

export default App;
