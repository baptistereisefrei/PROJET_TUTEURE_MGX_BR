'use client'
import styles from "../styles.module.css";
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';
import Link from "next/link";
import Image from 'next/image';

export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const module = modulesData.find((mod) => mod.slug === cleanedSlug);

  if (!module) {
    return <p>Module non trouvé</p>;
  }
 
  return (
    <div>
        <body className={styles.bodyStyle}>
            <div className={styles.header + ' ' + styles.headerSlug}>
                <Link href={'/'} className={styles.h1Style + ' ' + styles.backHomeButton}>Retour à l'accueil</Link>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
            <div className={styles.detailsEvent}>
                <div className={styles.titleContainerEvent}>
                    <Image
                        src={module.imgBeginning}
                        width={700}
                        height={400}
                        className={styles.imgBeginning}
                        alt="Image d'illustration"
                    />
                    <div className={styles.titleOverlayEvent}>
                        <h2 className={styles.titleEvent}>{module.title}</h2>
                    </div>
                </div>
                <div className={styles.detailContainerEvent}>
                    <p className={styles.descriptionEvent}>{module.detail}</p>
                </div>
                <div className={styles.imgContainerEvent}>
                    <Image
                        src={module.imgEnd}
                        width={700}
                        height={400}
                        className={styles.imgEnd}
                        alt="Image d'illustration"
                    />
                </div>
            </div>
        </body>
    </div>
  )
}
