import type { Component } from "solid-js";

import styles from "./Home.module.css";
import logo from "../assets/logo.svg";

import ScrollIndicator from "../components/ScrollIndicator";
import SwipeIndicator from "../components/SwipeIndicator";

const Home: Component<any> = props => {
  return (
    <section class={styles.home} ref={props.ref}>
      <img class={styles.logo} src={logo} alt="Cassel Logo" />
      <h1 class={styles.title}>Cassel Media</h1>
      <p class={styles.copy}>
        Live broadcast and pre-recorded video production you can trust{" "}
      </p>
      <div class={styles.actions}>
        <a href="#contact" class={styles.contact}>
          Contact
        </a>
        <span class={styles.scroll}>
          Scroll
          <span class={styles.indicator}>
            <ScrollIndicator />
          </span>
        </span>
        <span class={styles.swipe}>
          Swipe
          <span class={styles.indicator}>
            <SwipeIndicator />
          </span>
        </span>
      </div>
    </section>
  );
};

export default Home;
