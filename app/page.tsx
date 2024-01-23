import Image from "next/image";
import Module from "./Module";
import styles from "./styles.module.css";

const modulesData = [
  {
    title: "Seance fitness",
    date: "10/01/2024",
    heure_debut: "16",
    heure_fin: "18",
    description: "Venez découvrir le fitness avec le club de l'école !",
    photo: "/img/module1.jpg",
    category: "sport",
    slug: "seance-fitness"
  },
  {
    title: "Seance natation",
    date: "11/01/2024",
    heure_debut: "16",
    heure_fin: "18",
    description: "Venez nager avec le club natation !",
    photo: "/img/module2.jpg",
    category: "sport",
    slug: "seance-natation"
  },
  {
    title: "Cours particulier maths",
    date: "15/01/2024",
    heure_debut: "18",
    heure_fin: "20",
    description: "Viens renforcer tes connaissances.",
    photo: "/img/module3.jpg",
    category: "cours",
    slug: "cours-maths"
  },
  {
    title: "Cours particulier physique",
    date: "18/01/2024",
    heure_debut: "18",
    heure_fin: "20",
    description: "Viens renforcer tes connaissances en physique.",
    photo: "/img/module4.jpg",
    category: "cours",
    slug: "cours-physique"
  },
];

const Home = () => {
  return (
    <div className={styles.bodyStyle}>
      <div className={styles.container}>
        <h1 className={styles.h1Style}>Evenements</h1>
        {modulesData.map((module, index) => (
          <Module key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Home;
