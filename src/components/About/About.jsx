import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>React</h3>
              <p>
                I possess expertise in utilizing React across various projects,
                encompassing tasks such as ensuring responsiveness and
                optimizing websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>NodeJs</h3>
              <p>
                I have hands-on experience with Node.js, leveraging command line
                functionalities to create practical applications tailored for
                user needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Test Driven Implementation</h3>
              <p>
                I am adept at crafting comprehensive tests for applications,
                whether working independently or within a project-based context.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
