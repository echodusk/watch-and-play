import * as React from "react";
import { Header, Button, Form, Radio, CheckboxProps } from "semantic-ui-react";
import styles from "./Card.module.css";
import { CorrectAnswer, IQuizForm, Quizzes } from "../../models/quiz/quizzes";

type ICardFormProps = {
  quiz?: Quizzes;
  handleClose: () => void;
  handleSubmit: (form: IQuizForm) => void;
  handleEdit: (form: IQuizForm, id: string) => void;
};

export const CardForm: React.FunctionComponent<ICardFormProps> = ({
  handleClose,
  handleSubmit,
  handleEdit,
  quiz
}) => {
  const [form, setForm] = React.useState<IQuizForm>({
    question: "",
    answerA: "",
    answerB: "",
    correctAnswer: null
  });

  React.useEffect(() => {
    if (quiz) {
      const quizAsForm = {
        question: quiz.question,
        answerA: quiz.answerA,
        answerB: quiz.answerB,
        correctAnswer: quiz.correctAnswer
      };
      setForm(quizAsForm);
    }
  }, [quiz]);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);
  };

  const handleCheckBoxChange = (props: CheckboxProps): void => {
    const updatedForm = {
      ...form,
      correctAnswer: props.value as CorrectAnswer
    };
    setForm(updatedForm);
  };

  return (
    <section className={styles.card}>
      <Form>
        <Form.Field>
          <label>Question</label>
          <input
            name="question"
            value={form.question}
            onChange={handleFormChange}
            placeholder="Type your question here...."
          />
        </Form.Field>
        <div className="formAnswers">
          <div>
            <Header as="h5" className={styles.headerMargin} textAlign="right">
              Correct
            </Header>
            <Form.Group>
              <Form.Field width="14">
                <label>Answer A:</label>
                <input
                  value={form.answerA}
                  onChange={handleFormChange}
                  name="answerA"
                />
              </Form.Field>
              <Form.Field width="2" className={styles.centerAlign}>
                <Radio
                  name="correctAnswer"
                  width="2"
                  value={CorrectAnswer.First}
                  checked={form.correctAnswer === CorrectAnswer.First}
                  onChange={(_, props) => handleCheckBoxChange(props)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width="14">
                <label>Answer B:</label>
                <input
                  value={form.answerB}
                  onChange={handleFormChange}
                  name="answerB"
                />
              </Form.Field>
              <Form.Field width="2" className={styles.centerAlign}>
                <Radio
                  name="correctAnswer"
                  value={CorrectAnswer.Second}
                  checked={form.correctAnswer === CorrectAnswer.Second}
                  onChange={(_, props) => handleCheckBoxChange(props)}
                />
              </Form.Field>
            </Form.Group>
          </div>
        </div>
        <div className={styles.cardConfig}>
          <div>
            <Button onClick={() => handleClose()} basic>
              {quiz ? "Cancel" : "Discard"}
            </Button>
            <Button
              disabled={
                !form.question ||
                !form.answerA ||
                !form.answerB ||
                !form.correctAnswer
              }
              basic
              onClick={() => {
                quiz ? handleEdit(form, quiz.id) : handleSubmit(form);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Form>
    </section>
  );
};
