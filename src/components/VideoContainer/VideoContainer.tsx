import * as React from "react";

import styles from "./VideoContainer.module.css";
import { Header, Button } from "semantic-ui-react";

interface IVideoContainerProps {}

const VideoContainer: React.FunctionComponent<IVideoContainerProps> = props => {
  return (
    <section className={styles.mainDisplay}>
      <article className={styles.content}>
        <div className={styles.question}>
          <div className={styles.questionContainer}>
            <Header as="h2">Which one is not a JS Lib?</Header>
            <div className={styles.selectorContainer}>
              <div className={styles.questionSelector}>React</div>
              <div className={styles.questionSelector}>Spring</div>
            </div>
          </div>
        </div>
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
