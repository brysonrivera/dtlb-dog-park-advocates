import { Link } from "react-router-dom";
import { STORIES } from "../data/stories";
import styles from "./AllStories.module.css";

export default function AllStories() {
  return (
    <div className={styles.page}>
      <h1>Community Stories</h1>

      <div className={styles.grid}>
        {STORIES.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`} className={styles.card}>
            {story.image && 
            <img
                src={story.image || "../src/assets/logo-dtlb.png"}
                alt={story.title}
                className={styles.img}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "../src/assets/logo-dtlb.png";
                }}
            />
            }
            <h3>{story.title}</h3>
            <p className={styles.date}>{story.date}</p>
            <p>{story.preview}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

