import * as React from "react";

import styles from "./QuizzesContainer.module.css";

import { Header } from "semantic-ui-react";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import { Quizzes, IQuizForm } from "../../models/quiz/quizzes";

type IQuizzesContainerProps = {
  quizzes: Quizzes[];
  handleActive: (id: string) => void;
  handleSubmit: (form: IQuizForm) => void;
  handleDelete: (id: string) => void;
  handleEdit: (form: IQuizForm, id: string) => void;
};

const QuizzesContainer: React.FunctionComponent<IQuizzesContainerProps> = ({
  quizzes,
  handleActive,
  handleSubmit,
  handleDelete,
  handleEdit
}) => {
  return (
    <section className={styles.mainQuizzes}>
      <article className={styles.quizContainer}>
        <Header textAlign="left" as="h4">
          Trivia questions
        </Header>
        <CardsContainer
          handleEdit={handleEdit}
          handleActive={handleActive}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          quizzes={quizzes}
        />
      </article>
    </section>
  );
};

export default QuizzesContainer;
