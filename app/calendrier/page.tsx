"use client"
import Link from "next/link";
import styles from "../styles.module.css";
import modulesData from '../ModulesData';
import Calendar from '../components/calendar';

const Home = () => {
    return (
        <body className={styles.bodyStyle}>
            <div className={styles.header + ' ' + styles.headerSlug}>
                <Link href={'/'} className={styles.h1Style + ' ' + styles.backHomeButton}>Retour à l'accueil</Link>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
            <div className={styles.calendarContainer}>
                <Calendar />
            </div>
        </body>
  );
};

export default Home;
