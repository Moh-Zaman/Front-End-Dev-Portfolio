import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";


export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("education/fe.png")}
              alt="Front-End Dev"
              className={styles.EducationImg}
            />
            <div className={styles.aboutItemText}>
              <h3>EdX</h3>
              <h3>Front-End Developer</h3>
              <p>
                Modules include HTML/CSS, JavaScript, Bootstrap, Tailwind,
                JQuiery, React, NodeJs, Command Line, and advance use of APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("education/py.png")}
              alt="Python"
              className={styles.EducationImg}
            />
            <div className={styles.aboutItemText}>
              <h3>Brain Station</h3>
              <h3>Data Science</h3>
              <p>
                Modules include Advanced Python 3.0, Data visualisation, Data
                cleaning, Statistics, Numerical modelling, Classification, and
                Model validations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("education/uni.png")}
              alt="University"
              className={styles.EducationImg}
            />
            <div className={styles.aboutItemText}>
              <h3>Queen Mary's University of London</h3>
              <h3>First Class Honours MSci Biochemistry</h3>
              <p>
                Modules include Advanced Biochemical Research Methods and
                Biochemistry Laboratory Research Project
              </p>
            </div>
          </li>
          <a href="src/assets/education/Moh-Zaman-CV.pdf" download="" className={styles.contactBtn}>
            View CV
          </a>
        </ul>
      </div>
    </section>
  );
};
