import * as React from "react";
import { Button, Header, Icon } from "semantic-ui-react";

import styles from "./CardsContainer.module.css";

export interface ICardsContainerProps {}

export function CardsContainer(props: ICardsContainerProps) {
  return (
    <section className={styles.cardsContainer}>
      <div className={styles.card}>
        <Header textAlign="left" as="h5">
          What's the current year?
        </Header>
        <div className={styles.cardOptions}>
          <div>1990</div>
          <div>2019</div>
        </div>
        <div className={styles.cardConfig}>
          <Button basic>Create</Button>
          <div>
            <Icon link name="trash alternate outline" size="large"></Icon>
            <Icon link name="pencil" size="large"></Icon>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Header textAlign="left" as="h5">
          Which one is not a JS Lib?
        </Header>
        <div className={styles.cardOptions}>
          <div>1990</div>
          <div>2019</div>
        </div>
        <div className={styles.cardConfig}>
          <Button basic>Create</Button>
          <div>
            <Icon link name="trash alternate outline" size="large"></Icon>
            <Icon link name="pencil" size="large"></Icon>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Header textAlign="left" as="h5">
          Smash or Jump Force?
        </Header>
        <div>Smash</div>
        <div className={styles.cardOptions}>
          <div>1990</div>
          <div>2019</div>
        </div>
        <div className={styles.cardConfig}>
          <Button basic>Create</Button>
          <div>
            <Icon link name="trash alternate outline" size="large"></Icon>
            <Icon link name="pencil" size="large"></Icon>
          </div>
        </div>
      </div>
    </section>
  );
}
