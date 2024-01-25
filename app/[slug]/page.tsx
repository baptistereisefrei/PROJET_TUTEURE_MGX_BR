'use client'
import React, { useState } from 'react';
import styles from "../styles.module.css";
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';
import Link from "next/link";
import Image from 'next/image';
import { insertUserData } from '../api/insert'
import UserForm from '../UserForm';

export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const selectedModule = modulesData.find((mod) => mod.slug === cleanedSlug);

if (!selectedModule) {
 return <p>Module non trouvé</p>;
}
insertUserData("toto", "titi", "tata", "tutu");
// const handleFormSubmit = (formData: { prenom: string; nom: string; mail: string; telephone: string }) => {
//   insertUserData(formData.prenom, formData.nom, formData.mail, formData.telephone);
//   console.log('Données du formulaire soumises:', formData);
// };

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
