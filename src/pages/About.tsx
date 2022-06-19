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
          I've always had a knack for technology, but also a passion for
          creativity. Video productions has proven to be a cross roads of the
          two for me.
          <br />
          <br />
          Through numerous experiences, live-streaming events, filming and
          editing small projects, producing a live morning show and competing in
          competitions, I have gained quintessential skills.
          <br />
          <br />
          With my work I strive for quality and creativity, to make top of the
          line engaging products.
        </p>
      </div>
    </section>
  );
};

export default About;
