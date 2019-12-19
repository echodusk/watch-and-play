import * as React from "react";
import { Button } from "semantic-ui-react";
import { Card } from "../Card/Card";
import { CardForm } from "../CardForm/CardForm";

import { Quizzes } from "../../models/quiz/quizzes";
import styles from "./CardsContainer.module.css";

type ICardsContainerProps = {
  quizzes: Quizzes[];
  handleActive: (id: number) => void;
  handleSubmit: () => void;
  handleClose: () => void;
};

export const CardsContainer: React.FC<ICardsContainerProps> = ({
  quizzes,
  handleActive
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeForm = () => setOpen(false);

  return (
    <React.Fragment>
      <section className={styles.cardsContainer}>
        {quizzes.map(quiz => (
          <Card handleActive={handleActive} key={quiz.id} quiz={quiz} />
        ))}
      </section>
      <section>
        {!isOpen ? (
          <Button onClick={() => setOpen(true)} basic floated="left">
            Add Question
          </Button>
        ) : (
          <CardForm handleClose={closeForm} />
        )}
      </section>
    </React.Fragment>
  );
};
