import * as React from "react";
import { Button, Header, Icon } from "semantic-ui-react";

import styles from "./CardsContainer.module.css";
import { Quizzes } from "../../models/quiz/quizzes";
import Card from "../Card/Card";

type ICardsContainerProps = {
  quizzes: Quizzes[];
}

export function CardsContainer(props: ICardsContainerProps) {
  return (
    <React.Fragment>
      <section className={styles.cardsContainer}>
        {props.quizzes.map(quiz => (
          <Card key={quiz.id} quiz={quiz}  />
        ))}
      </section>
      <section>
        <Button basic floated="left">
          Add Question
        </Button>
      </section>
    </React.Fragment>
  );
}

{/* <div className={styles.card}>
          <Header textAlign="left" as="h5">
            What's the current year?
          </Header>
          <div className={styles.cardOptions}>
            <div>1990</div>
            <div>2019</div>
          </div>
          <div className={styles.cardConfig}>
            <Button basic>Open</Button>
            <div>
              <Icon link name="trash alternate outline" size="large"></Icon>
              <Icon link name="pencil" size="large"></Icon>
            </div>
          </div>
        </div>
        <div className={styles.cardOpen}>
          <Header textAlign="left" as="h5">
            Which one is not a JS Lib?
          </Header>
          <div className={styles.cardOptions}>
            <div>Spring</div>
            <div>React</div>
          </div>
          <div className={styles.cardConfig}>
            <Button basic>Close</Button>
            <div>
              <Icon link name="trash alternate outline" size="large"></Icon>
              <Icon link name="pencil" size="large"></Icon>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Header textAlign="left" as="h5">
            Smash or Jump Force?
          </Header>
          <div className={styles.cardOptions}>
            <div>Smash</div>
            <div>Jump Force</div>
          </div>
          <div className={styles.cardConfig}>
            <Button basic>Create</Button>
            <div>
              <Icon link name="trash alternate outline" size="large"></Icon>
              <Icon link name="pencil" size="large"></Icon>
            </div>
          </div>
        </div> */}