// src/pages/Event.tsx
import { useParams, Link } from "react-router-dom";
import { EVENTS } from "../../data/events";
import styles from "./Event.module.css";

export default function Event() {
  const { id } = useParams();
  const event = EVENTS.find((e) => e.id === id);

  if (!event) return <p>Event not found.</p>;

  return (
    <div className={styles.page}>
      <Link to="/events" className={styles.back}>← Back to all events</Link>

      {event.image && (
        <img src={event.image} alt="" className={styles.hero} />
      )}

      <h1 className={styles.title}>{event.title}</h1>
      <p className={styles.date}>{event.date}</p>

      <p className={styles.details}>{event.details}</p>
    </div>
  );
}
