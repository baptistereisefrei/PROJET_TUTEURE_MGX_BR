import Module from "./Module";
import styles from "./styles.module.css";
import modulesData from "./ModulesData.js";
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./components/ui/accordion"
  

const Home = () => {
    return (
        <body className={styles.bodyStyle}>
            <div className={styles.header + ' ' + styles.headerSlug}>
                <Link href={'/calendrier'} className={styles.designButtonDetails + ' ' + styles.calendarButton}>Voir le calendrier</Link>
                <h1 className={styles.h1Style}>Évènements</h1>
            </div>
            <div className={styles.accordeonHomePage}>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <p id="accordionItem1TitleID">Pourquoi venir ?</p>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p id="accordionItem1DescID">Tout simplement pour rencontrer de nouveaux étudiants et partager de bons moments !</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
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
