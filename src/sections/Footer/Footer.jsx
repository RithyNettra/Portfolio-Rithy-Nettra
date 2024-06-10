import styles from './StyleFooter.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Rithy Nettra. <br />
        All rights reserved.
        </p>
    </section>
  )
}

export default Footer