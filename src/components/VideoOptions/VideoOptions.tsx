import * as React from "react";
import styles from "./VideoOptions.module.css";
import { Header } from "semantic-ui-react";
import { CorrectAnswer } from "../../models/quiz/quizzes";

const correctStyle = {
  color: "#fff",
  background: "#2ac28f"
};

const incorrectStyle = {
  color: "#fff",
  background: "#dc4c18"
};

type IVideoOptionsProps = {
  question: string;
  answerA: string;
  answerB: string;
  correctAnswer: CorrectAnswer;
};

export const VideoOptions: React.FunctionComponent<IVideoOptionsProps> = ({
  question,
  answerA,
  answerB,
  correctAnswer
}) => {
  const [clicked, setClicked] = React.useState(false);
  const [firstStyle, setFirstStyle] = React.useState({});
  const [secondStyle, setSecondStyle] = React.useState({});

  React.useEffect(() => {
    setClicked(false);
    setFirstStyle({});
    setSecondStyle({});
  }, [question, answerA, answerB, correctAnswer]);

  const handleStyles = (answer: CorrectAnswer) => {
    if (clicked) {
      return;
    }

    setClicked(true);

    if (answer === 1) {
      if (correctAnswer === CorrectAnswer.First) {
        setFirstStyle(correctStyle);
      } else {
        setFirstStyle(incorrectStyle);
      }
    } else {
      if (correctAnswer === CorrectAnswer.Second) {
        setSecondStyle(correctStyle);
      } else {
        setSecondStyle(incorrectStyle);
      }
    }
  };
  return (
    <div className={styles.question}>
      <div className={styles.questionContainer}>
        <Header as="h2">{question}</Header>
        <div className={styles.selectorContainer}>
          <div
            style={firstStyle}
            onClick={() => handleStyles(1)}
            className={styles.questionSelector}
          >
            {answerA}
          </div>
          <div
            onClick={() => handleStyles(2)}
            style={secondStyle}
            className={styles.questionSelector}
          >
            {answerB}
          </div>
        </div>
      </div>
    </div>
  );
};
