import React from "react";
import styles from '../About/About.module.css';
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="About Image" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
                I have made a Website using React.js. Like Business Landing Pages, Portfolio Websites, Contact Page Design, Dice Games, and many more.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>WordPress Developer</h3>
              <p>
                I have 3.5 years of experience in WordPress Website Development. Like Developing and Designing Websites and Landing Pages. I also optimize website Performance for fast Page Loading.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Digital Marketer</h3>
              <p>
                I have also experience in Digital Marketing. Like managing Social Media accounts, SEO, Google Ads, and Facebook Ads.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
