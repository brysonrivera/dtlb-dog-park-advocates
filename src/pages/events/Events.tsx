// src/pages/Events.tsx
import { Link } from "react-router-dom";
import { EVENTS } from "../../data/events";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Upcoming Events</h1>
      <div className={styles.createWrapper}>
          <Link to="/events/create" className={styles.createButton}>
            + Create an Event
          </Link>
        </div>
      <div className={styles.list}>
        {EVENTS.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className={styles.card}>
            {event.image && (
              <img src={event.image} alt="" className={styles.image} />
            )}
            <h2>{event.title}</h2>
            <p className={styles.date}>{event.date}</p>
            <p>{event.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
