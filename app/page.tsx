import Module from "./Module";
import styles from "./styles.module.css";
import modulesData from "./ModulesData.js";

const Home = () => {
    return (
        <body className={styles.bodyStyle}>
            <div className={styles.header}>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
            <div className={styles.divTitleAndEvents}>
                <div className={styles.containerCard}>
                    {modulesData.map((module, index) => (
                        <Module key={index} {...module}/>
                    ))}
                </div>
            </div>
        </body>
  );
};

export default Home;
