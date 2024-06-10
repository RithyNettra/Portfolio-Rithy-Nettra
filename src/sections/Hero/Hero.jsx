import styles from './HeroStyles.module.css';
import heroimg from '../../assets/photo_6.jpg';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import youtubeicon from '../../assets/youtube.png';
import facebookicon from '../../assets/facebook.png';
import telegramicon from '../../assets/telegram.png';
import CV from '../../assets/telegram.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeicon = theme === 'light' ? sun : moon;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.ColorModeContainer}>
        <img className={styles.hero} src={heroimg} alt="profile" />
        <img className={styles.thememode} src={themeicon} alt="theme mode logo" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Rithy <br /> Nettra</h1>
        <h2>Frontend Developer || Students</h2>
        <span>
          <a href="https://www.youtube.com/" target='_blank'>
            <img src={youtubeicon} alt="YouTube" />
          </a>
          <a href="https://www.facebook.com/" target='_blank'>
            <img src={facebookicon} alt="Facebook" />
          </a>
          <a href="https://www.telegram.com/" target='_blank'>
            <img src={telegramicon} alt="Telegram" />
          </a>
        </span>
        <p className={styles.description}>With A passion for developing modern React web apps & willing to learn more about the real world jobs.</p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
