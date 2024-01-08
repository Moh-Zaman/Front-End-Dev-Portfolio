import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Moh</h1>
        <p className={styles.description}>
          I'm a front-end developer who specialize in developing contemporary and adaptable web applications with a focus on modern design and responsiveness.
        </p>
        <a href="mailto:Moh.Zaman@hotmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};