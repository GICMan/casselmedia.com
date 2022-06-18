import type { Component } from "solid-js";

import styles from "./About.module.css";

const About: Component<any> = props => {
  return (
    <section class={styles.about} ref={props.ref}>
      <div class={styles.container}>
        <h2 class={styles.name}>
          Gabriel <span class={styles.cassel}>Cassel</span>man
        </h2>
        <p class={styles.copy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae felis
          fringilla integer amet adipiscing bibendum. Scelerisque mattis
          convallis consequat, iaculis sagittis enim aliquam, volutpat amet.
        </p>
      </div>
    </section>
  );
};

export default About;
