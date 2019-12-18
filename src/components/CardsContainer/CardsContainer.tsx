import * as React from "react";
import { Button } from "semantic-ui-react";

import styles from "./CardsContainer.module.css";
import { Quizzes } from "../../models/quiz/quizzes";
import { Card } from "../Card/Card";

type ICardsContainerProps = {
  quizzes: Quizzes[];
}

export const CardsContainer: React.FC<ICardsContainerProps> = ({ quizzes }) => {
  return (
    <React.Fragment>
      <section className={styles.cardsContainer}>
        {quizzes.map(quiz => (
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