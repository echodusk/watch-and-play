import * as React from "react";
import 'semantic-ui-css/semantic.min.css'

import { Header } from 'semantic-ui-react'
import {CardsContainer} from './components/CardsContainer/CardsContainer';
import { IAppProps, IAppState } from "./models/app/IApp";

import styles from "./App.module.css";

class App extends React.Component<IAppProps, IAppState> {
  state: IAppState = {
    quizzes: []
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
            <Header textAlign="left" as="h4">Trivia questions</Header>

            <CardsContainer />
          </article>
        </section>
      </main>
    );
  }
}

export default App;
