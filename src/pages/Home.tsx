import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { EVENTS } from "../data/events";
import { STORIES } from "../data/stories";
import DogCarousel from "../../src/components/DogCarousel";
import dtlbLogo from "../assets/logo-dtlb.png";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={`${styles.fullPageSection} ${styles.sectionLight}`}>
  <div className={styles.heroContent}>
    <h1>Build the DTLB Dog Park Now</h1>
    <p>
      Our dogs deserve a safe, spacious place to run, play, and thrive. 
      Together, we can make it happen.
    </p>

    <div className={styles.ctaRow}>
      <Link to="/signup" className={styles.ctaPrimary}>Sign Up</Link>
      <Link to="/resources/contact" className={styles.ctaSecondary}>Email Your Reps</Link>
      <Link to="/share" className={styles.ctaOutline}>Share Story</Link>
    </div>
  </div>

  <DogCarousel />
</section>
      {/* STORIES PREVIEW */}
        <section className={`${styles.fullPageSection} ${styles.sectionBlue}`}>
        <h2 className={styles.sectionTitle}>Community Stories</h2>
        <p className={styles.sectionText}>
            Hear from DTLB residents about why a dog park matters.
        </p>
        <div className={styles.storyPreview}>
        {STORIES.slice(0, 3).map((story) => (
            <Link 
            key={story.id}
            to={`/story/${story.id}`}
            className={styles.storyCard}
            >
            {story.image && (
                <img
                src={story.image || dtlbLogo}
                alt={story.title}
                className={styles.previewImg}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = dtlbLogo;
                }}
                />
            )}
            <h3>{story.title}</h3>
            <p>{story.preview}</p>
            <span className={styles.cardCTA}>Read story →</span>
            </Link>
        ))}
        </div>
        <Link to="/stories" className={styles.learnMore}>
            Explore all stories →
        </Link>
        </section>


      {/* EVENTS PREVIEW */}
      <section className={`${styles.fullPageSection} ${styles.eventsPreviewSection}`}>
  <h2 className={styles.sectionTitle}>Upcoming Events</h2>

  <div className={styles.eventsPreview}>
    {EVENTS.slice(0, 3).map((event) => (
      <Link key={event.id} to={`/events/${event.id}`} className={styles.eventCard}>
        <h3>{event.title}</h3>
        <p className={styles.date}>{event.date}</p>
      </Link>
    ))}
  </div>

  <Link to="/events" className={styles.learnMore}>
    View all events →
  </Link>
</section>
    </div>
  );
}