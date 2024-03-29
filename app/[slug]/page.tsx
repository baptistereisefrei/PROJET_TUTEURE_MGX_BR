'use client'
import React, { useState } from 'react';
import styles from "../styles.module.css";
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';
import Link from "next/link";
import Image from 'next/image';
import { insertUserData } from '../insert'


export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const selectedModule = modulesData.find((mod) => mod.slug === cleanedSlug);

  if (!selectedModule) {
    return <p>Module non trouvé</p>;
  }
 
  insertUserData("TEST_NAME", "TEST_SURNAME", "TEST@GMAIL.COM", "0123456789");

  return (
    <body className={styles.bodyStyle}>
        <section id="sectionRedirection">
            <div className={styles.header + ' ' + styles.headerSlug}>
                <Link href={'/'} className={styles.h1Style + ' ' + styles.backHomeButton}>Retour à l'accueil</Link>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
        </section>
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
    </body>
  )
}
