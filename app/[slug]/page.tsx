'use client'
import React, { useState } from 'react';
import styles from "../styles.module.css";
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';
import Link from "next/link";
import Image from 'next/image';
import { insertUserData } from '../api/insert'

export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const selectedModule = modulesData.find((mod) => mod.slug === cleanedSlug);

if (!selectedModule) {
 return <p>Module non trouvé</p>;
}
const prenom = 'John';
const nom = 'Doe';
const mail = 'john.doe@example.com';
const telephone = '1234567890';

insertUserData(prenom, nom, mail, telephone);

  return (
        <div className={styles.bodyStyle}>
            <div className={styles.header + ' ' + styles.headerSlug}>
                <Link href={'/'} className={styles.h1Style + ' ' + styles.backHomeButton}>Retour à l'accueil</Link>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
            <div className={styles.detailsEvent}>
                <div className={styles.titleContainerEvent}>
                    <Image
                        src={selectedModule.imgBeginning}
                        width={700}
                        height={400}
                        className={styles.imgBeginning}
                        alt="Image d'illustration"
                    />
                    <div className={styles.titleOverlayEvent}>
                        <h2 className={styles.titleEvent}>{selectedModule.title}</h2>
                    </div>
                </div>
                <div className={styles.detailContainerEvent}>
                    <p className={styles.descriptionEvent}>{selectedModule.detail}</p>
                </div>
                <div className={styles.imgContainerEvent}>
                    <Image
                        src={selectedModule.imgEnd}
                        width={700}
                        height={400}
                        className={styles.imgEnd}
                        alt="Image d'illustration"
                    />
                </div>
            </div>
        </div>
  )
}
