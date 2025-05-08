import styles from './Footer.module.css';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funcionana técnica pomodor</a>
      <a href="">Chronos Pomodoro &copy; { new Date().getFullYear() } - Fetito com 💚</a>
    </footer>
  );

}