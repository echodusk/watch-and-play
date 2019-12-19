import * as React from "react";
import { Header, Button, Icon } from "semantic-ui-react";

import { Quizzes, CorrectAnswer } from "../../models/quiz/quizzes";
import styles from "./Card.module.css";


type ICardsContainerProps = {
  quiz: Quizzes;
  handleActive: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const Card: React.FC<ICardsContainerProps> = ({ quiz, handleActive, handleDelete }) => {
  return (
    <div className={quiz.active ? styles.cardOpen : styles.card}>
      <Header textAlign="left" as="h5">
        {quiz.question}
      </Header>
      <div className={styles.cardOptions}>
        <div>
          {quiz.answerA} { quiz.correctAnswer === CorrectAnswer.First ? (<Icon className={styles.correct} name="check"></Icon>) : null }
        </div>
        <div>
          {quiz.answerB} {quiz.correctAnswer === CorrectAnswer.Second ? (<Icon className={styles.correct} name="check"></Icon>) : null }
        </div>
      </div>
      <div className={styles.cardConfig}>
        <Button basic onClick={() => handleActive(quiz.id)}>{quiz.active ? "Close" : "Open"}</Button>
        <div>
          <Icon onClick={() => handleDelete(quiz.id)} link name="trash alternate outline" size="large"></Icon>
          <Icon link name="pencil" size="large"></Icon>
        </div>
      </div>
    </div>
  );
};