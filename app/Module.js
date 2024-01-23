import styles from "./styles.module.css";
import Image from 'next/image';

const Module = ({ title, date, description, heure_debut, heure_fin, photo }) => {
    return (
      <div className={styles.module}>
        <h2>{title}</h2>
        <div>
            <p className={styles.removeMargin}>Le {date}</p>
            <p className={styles.removeMargin}>De {heure_debut}h à {heure_fin}h</p>
            <p>{description}</p>
            <Image
                src={photo}
                width={200}
                height={200}
            />
        </div>
      </div>
    );
  };

export default Module;