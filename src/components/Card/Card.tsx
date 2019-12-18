import * as React from "react";
import { Quizzes } from "../../models/quiz/quizzes";

import styles from "./Card.module.css";

import { Header, Button, Icon } from "semantic-ui-react";
type ICardsContainerProps = {
  quiz: Quizzes;
};

const Card: React.FunctionComponent<ICardsContainerProps> = ({ quiz }) => {
  return (
    <div className={quiz.active ? styles.cardOpen : styles.card}>
      <Header textAlign="left" as="h5">
        {quiz.question}
      </Header>
      <div className={styles.cardOptions}>
        <div>
          {quiz.answerA}
          {quiz.correctAnswer === 1 ? (
            <Icon className={styles.correct} name="check"></Icon>
          ) : null}
        </div>
        <div>
          {quiz.answerB}
          {quiz.correctAnswer === 2 ? (
            <Icon className={styles.correct} name="check"></Icon>
          ) : null}
        </div>
      </div>
      <div className={styles.cardConfig}>
        <Button basic>{quiz.active ? "Close" : "Open"}</Button>
        <div>
          <Icon link name="trash alternate outline" size="large"></Icon>
          <Icon link name="pencil" size="large"></Icon>
        </div>
      </div>
    </div>
  );
};

export default Card;
