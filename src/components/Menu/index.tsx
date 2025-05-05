import styles from './styles.module.css';
import {  History, HouseIcon, Settings, SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href="#">
        <History />
      </a>

      <a className={styles.menuLink} href="#">
        <Settings />
      </a>

      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
  );

}