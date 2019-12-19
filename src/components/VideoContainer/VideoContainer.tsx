import * as React from "react";

import styles from "./VideoContainer.module.css";

interface IVideoContainerProps {}

const VideoContainer: React.FunctionComponent<IVideoContainerProps> = props => {
  return (
    <section className={styles.mainDisplay}>
      <article className={styles.content}>
        <div className={styles.question}>
          <div>Hola</div>
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
