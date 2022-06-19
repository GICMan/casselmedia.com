import type { Component } from "solid-js";

import styles from "./Contact.module.css";

const Contact: Component = () => {
  return (
    <section class={styles.contact} id="contact">
      <form
        class={styles.container}
        action="https://formspree.io/f/xbjwejjy"
        method="post"
      >
        <h2 class={styles.heading}>Contact</h2>
        <div class={styles.fields}>
          <div class={styles.info}>
            <label for="name" class={styles.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              class={styles.input}
              placeholder="John Doe"
            />
            <label for="email" class={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              class={styles.input}
              placeholder="johndoe@example.com"
            />
          </div>
          <div class={styles.message}>
            <label for="message" class={styles.label}>
              Your Message
            </label>
            <textarea
              name="message"
              class={styles.textbox}
              placeholder="Wow! I really like your work"
            ></textarea>
          </div>
        </div>
        <button type="submit" class={styles.send}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
