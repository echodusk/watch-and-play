import * as React from "react";
import { Header, Button, Form, Radio, CheckboxProps } from "semantic-ui-react";
import styles from "./Card.module.css";
import { CorrectAnswer } from "../../models/quiz/quizzes";

type ICardFormProps = {
  handleClose: () => void;
};

type IForm = {
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer | null;
}

export const CardForm: React.FunctionComponent<ICardFormProps> = ({
  handleClose
}) => {
  const [form, setForm] = React.useState<IForm>({ question: '', answerA: '', answerB: '', correctAnswer: null });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);
  };

  const handleCheckBoxChange = (props: CheckboxProps): void => {
    const updatedForm = { ...form, correctAnswer: props.value as CorrectAnswer }
    setForm(updatedForm);
    console.log(form);
  }

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
              Answer
            </Header>
            <Form.Group>
              <Form.Field width="14">
                <label>Answer A:</label>
                <input onChange={handleFormChange} name="answerA" />
              </Form.Field>
              <Radio
                name="correctAnswer"
                width="2"
                value={CorrectAnswer.First}
                onChange={(_, props) => handleCheckBoxChange(props)}
                className={styles.centerAlign}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field width="14">
                <label>Answer B:</label>
                <input onChange={handleFormChange} name="answerB" />
              </Form.Field>

              <Radio
                name="correctAnswer"
                width="2"
                value={CorrectAnswer.Second}
                onChange={(_, props) => handleCheckBoxChange(props)}
                className={styles.centerAlign}
              />
            </Form.Group>
          </div>
        </div>
        <div className={styles.cardConfig}>
          <div>
            <Button onClick={() => handleClose()} basic>
              Discard
            </Button>
            <Button basic>Save</Button>
          </div>
        </div>
      </Form>
    </section>
  );
};
