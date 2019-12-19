import * as React from "react";

import styles from "./VideoContainer.module.css";

interface IVideoContainerProps {}

const VideoContainer: React.FunctionComponent<IVideoContainerProps> = props => {
  return (
    <section className={styles.mainDisplay}>
      <article className="video-box">
        <div className="video-overlay"></div>
        <video
          src="https://vjs.zencdn.net/v/oceans.mp4"
          id="video"
          width="300"
          height="600"
          loop
          muted
          autoPlay
        ></video>
      </article>
    </section>
  );
};

export default VideoContainer;
