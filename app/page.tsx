import Image from "next/image";
import Module from "./Module";
import styles from "./styles.module.css";
import modulesData from "./data"

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
