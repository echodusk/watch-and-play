import * as React from "react";
import { Button } from "semantic-ui-react";
import { Card } from "../Card/Card";
import { CardForm } from "../CardForm/CardForm";

import { Quizzes, IQuizForm } from "../../models/quiz/quizzes";
import styles from "./CardsContainer.module.css";

type ICardsContainerProps = {
  quizzes: Quizzes[];
  handleActive: (id: string) => void;
  handleSubmit: (form: IQuizForm) => void;
  handleDelete: (id: string) => void;
  handleEdit: (form: IQuizForm, id: string) => void;
};

export const CardsContainer: React.FC<ICardsContainerProps> = ({
  quizzes,
  handleActive,
  handleSubmit,
  handleDelete,
  handleEdit,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [editingId, setEditingId] = React.useState<string>("");

  const onEditMode = (id: string) => {
    setEditingId(id);
  };
  const closeForm = () => {
    if (editingId) {
      setEditingId("");
    }
    
    setOpen(false);
  };
  const submitForm = (form: IQuizForm): void => {
    handleSubmit(form);
    setEditingId("");
    setOpen(false);
  };

  const editForm = (form: IQuizForm, id: string): void => {
    setEditingId("");
    handleEdit(form, id);
  }

  return (
    <React.Fragment>
      <section className={styles.cardsContainer}>
        {editingId
          ? quizzes.map(quiz => {
              if (quiz.id === editingId) {
                return (
                  <CardForm
                    key={quiz.id}
                    quiz={quiz}
                    handleSubmit={submitForm}
                    handleClose={closeForm}
                    handleEdit={editForm}
                  />
                );
              } else {
                return (
                  <Card
                    handleEditMode={onEditMode}
                    handleDelete={handleDelete}
                    handleActive={handleActive}
                    key={quiz.id}
                    quiz={quiz}
                  />
                );
              }
            })
          : quizzes.map(quiz => (
              <Card
                handleEditMode={onEditMode}
                handleDelete={handleDelete}
                handleActive={handleActive}
                key={quiz.id}
                quiz={quiz}
              />
            ))}
      </section>
      <section>
        {!isOpen ? (
          <Button onClick={() => { setEditingId(""); setOpen(true); }} basic floated="left">
            Add Question
          </Button>
        ) : (
          <CardForm handleEdit={editForm} handleSubmit={submitForm} handleClose={closeForm} />
        )}
      </section>
    </React.Fragment>
  );
};
