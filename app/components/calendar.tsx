import styles from '../styles.module.css';
import modulesData from '../ModulesData';

const Calendar = () => {
    // const UpcomingEvents = () => {
    //     const sortedEvents = modulesData.sort((a, b) => {
    //       const dateA = new Date(a.date);
    //       const dateB = new Date(b.date);
    //       return dateA - dateB;
    //     });

    return (
        <div className={styles.calendarContainer}>
            {modulesData.map((event, index) => (
                <div key={index} className={styles.event}>
                    <p>{event.title}</p>
                    <p>Date: {event.date}</p>
                    {/* <p>Time: {event.heure_debut}h - {event.heure_fin}h</p> */}
                </div>
            ))}
        </div>
      );
};

export default Calendar;
