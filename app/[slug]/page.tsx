'use client'
import React, { useState } from 'react';
import styles from "../styles.module.css";
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';
import Link from "next/link";
import Image from 'next/image';
import { insertUserData } from '../insert'
import UserForm from '../UserForm';

export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const selectedModule = modulesData.find((mod) => mod.slug === cleanedSlug);

if (!selectedModule) {
 return <p>Module non trouvé</p>;
}

const [formData, setFormData] = useState({
  prenom: '',
  nom: '',
  mail: '',
  telephone: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Empêche la soumission normale du formulaire

  try {
    // Utilisez la fonction insertUserData avec les données du formulaire
    await insertUserData(formData.prenom, formData.nom, formData.mail, formData.telephone);
    console.log('Formulaire soumis avec succès!');
    // Vous pouvez également rediriger l'utilisateur ou effectuer d'autres actions ici
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la soumission du formulaire:', error);
  }
};

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
            <form onSubmit={handleSubmit}>
              <label htmlFor="prenom">Prénom:</label>
              <input type="text" id="prenom" name="prenom" required onChange={handleChange}></input>

              <label htmlFor="nom">Nom:</label>
              <input type="text" id="nom" name="nom" required onChange={handleChange}></input>

              <label htmlFor="mail">E-mail:</label>
              <input type="email" id="mail" name="mail" required onChange={handleChange}></input>

              <label htmlFor="telephone">Numéro de téléphone:</label>
              <input type="tel" id="telephone" name="telephone" required onChange={handleChange}></input>

              <input type="submit" value="Soumettre"></input>
            </form>
        </div>
  )
}
