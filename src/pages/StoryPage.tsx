import { useParams, Link } from "react-router-dom";
import { STORIES } from "../data/stories";
import styles from "./StoryPage.module.css";

export default function StoryPage() {
  const { id } = useParams();
  const story = STORIES.find((s) => s.id === id);

  if (!story) return <p>Story not found.</p>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.storyContainer}>
        <Link to="/stories" className={styles.back}>← Back to all stories</Link>

        {story.image ? (
            <img
                src={story.image}
                alt={story.title}
                className={styles.coverImage}
                onError={(e) => {
                (e.target as HTMLImageElement).src = "../src/assets/logo-dtlb.png";
                }}
            />
            ) : (
            <img
                src="../src/assets/logo-dtlb.png"
                alt="default story"
                className={styles.coverImage}
            />
        )}
        <h1 className={styles.title}>{story.title}</h1>
        <p className={styles.date}>{story.date}</p>

        <div className={styles.content}>
          {story.content.split("\n").map((p, i) => (
            <p key={i}>{p.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
