import styles from "./CommunityStories.module.css";

const stories = [
  { id: 1, title: "Max loves Lincoln Park", img: "/dog1.jpg" },
  { id: 2, title: "Luna at Seaside Dog Zone", img: "/dog2.jpg" },
];

export default function CommunityStories() {
  return (
    <div className={styles.container}>
      <h2>Community Stories</h2>
      <div className={styles.storyList}>
        {stories.map(story => (
          <div key={story.id} className={styles.storyCard}>
            <img src={story.img} className={styles.storyImage} alt={story.title} />
            <div className={styles.storyTitle}>{story.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}