import * as React from "react";

import styles from "./VideoContainer.module.css";
import { Quizzes } from "../../models/quiz/quizzes";
import { VideoOptions } from "../VideoOptions/VideoOptions";

type IVideoContainerProps = {
  question: Quizzes | undefined;
};

const VideoContainer: React.FunctionComponent<IVideoContainerProps> = ({
  question
}) => {
  return (
    <section className={styles.mainDisplay}>
      <article className={styles.content}>
        {question ? (
          <VideoOptions
            answerA={question.answerA}
            answerB={question.answerB}
            correctAnswer={question.correctAnswer}
            question={question.question}
          />
        ) : null}
        <video
          src="https://vjs.zencdn.net/v/oceans.mp4"
          id="video"
          loop
          muted
          autoPlay
        ></video>
      </article>
    </section>
  );
};

export default VideoContainer;
