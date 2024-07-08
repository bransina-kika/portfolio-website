import React from 'react'
import {getImageUrl} from '../../utils';
import styles from '../Hero/Hero.module.css';

const Hero = () => {
  return (
    <>
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Bransina</h1>
                <p className={styles.description}>With a background in WordPress development, I am currently transitioning my expertise to specialize in React development. I bring a solid foundation in web development, leveraging my experience to enhance user experiences and deliver scalable solutions. </p>
                <a href="mailto:kikabransina@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}/>
        </section>
    </>
  )
}

export default Hero