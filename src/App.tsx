import * as React from "react";
import "semantic-ui-css/semantic.min.css";

import { Header } from "semantic-ui-react";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";

import { Quizzes } from "./models/quiz/quizzes";
import styles from "./App.module.css";

export type IAppState = {
  quizzes: Quizzes[];
};

class App extends React.Component<{}, IAppState> {
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
      }
    ]
  };

  public onActiveHandler = (id: number): void => {
    const { quizzes } = this.state;
    const filteredQuizzes = quizzes.map(quizz => {
      if (quizz.id === id) {
        quizz.active = true;
        return quizz;
      }
      quizz.active = false;
      return quizz;
    });

    this.setState({ quizzes: filteredQuizzes });
  };

  public onQuizzSubmit = (): void => {
  }

  public onQuizzClose = (): void => {}

  public render() {
    return (
      <main className={styles.App}>
        <section className={styles.mainDisplay}>
          <p>Ballad of Beacondfield Miners.</p>
        </section>
        <section className={styles.mainQuizzes}>
          <article className={styles.quizContainer}>
            <Header textAlign="left" as="h4">
              Trivia questions
            </Header>
            <CardsContainer
              handleActive={this.onActiveHandler}
              handleSubmit={this.onQuizzSubmit}
              handleClose={this.onQuizzClose}
              quizzes={this.state.quizzes}
            />
          </article>
        </section>
      </main>
    );
  }
}

export default App;
