import * as React from "react";
import { Button } from "semantic-ui-react";
import { Card } from "../Card/Card";
import { CardForm } from "../CardForm/CardForm";

import { Quizzes, IQuizzForm } from "../../models/quiz/quizzes";
import styles from "./CardsContainer.module.css";

type ICardsContainerProps = {
  quizzes: Quizzes[];
  handleActive: (id: string) => void;
  handleSubmit: (form: IQuizzForm) => void;
  handleDelete: (id: string) => void;
};

export const CardsContainer: React.FC<ICardsContainerProps> = ({
  quizzes,
  handleActive,
  handleSubmit,
  handleDelete,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeForm = () => setOpen(false);
  const submitForm = (form: IQuizzForm): void => {
    handleSubmit(form)
    setOpen(false);
  };

  return (
    <React.Fragment>
      <section className={styles.cardsContainer}>
        {quizzes.map(quiz => (
          <Card handleDelete={handleDelete} handleActive={handleActive} key={quiz.id} quiz={quiz} />
        ))}
      </section>
      <section>
        {!isOpen ? (
          <Button onClick={() => setOpen(true)} basic floated="left">
            Add Question
          </Button>
        ) : (
          <CardForm handleSubmit={submitForm} handleClose={closeForm} />
        )}
      </section>
    </React.Fragment>
  );
};
