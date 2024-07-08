import React from 'react'
import styles from '../Contact/Contact.module.css';
import {getImageUrl} from '../../utils';

const Contact = () => {
  return (
    <footer id='contact'className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:kikabransina@gmail.com">kikabransina@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/bransinakika/">linkedin.com/kika-bransina</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/bransina-kika">github.com/bransina-kika</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact