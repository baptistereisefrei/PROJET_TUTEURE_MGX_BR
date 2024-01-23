import styles from "./styles.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Module = ({ title, date, description, heure_debut, heure_fin, photo, slug }) => {
    return (
      <div className={styles.module}>
          <h2>
            <Link href={`/${slug}`}>
              {title}
            </Link>
          </h2>
        <div>
            <p className={styles.removeMargin}>Le {date}</p>
            <p className={styles.removeMargin}>De {heure_debut}h à {heure_fin}h</p>
            <p>{description}</p>
            <Image
                src={photo}
                width={700}
                height={400}
            />
        </div>
      </div>
    );
  };

export default Module;