import { useState } from "react";
import styles from "./ShareStory.module.css";

export default function ShareStoryPage() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = () => {
    const subjectBase = "DTLB Dog Park Story Submission";

    const subject = encodeURIComponent(
      title.trim() !== ""
        ? `${subjectBase} — ${title}`
        : subjectBase
    );

    const body = encodeURIComponent(
      `Story Title: ${title || "(No title provided)"}\n\n` +
      `${story}\n\n` +
      `You can attach photos in the email window before sending.\n`
    );

    window.location.href = `mailto:dtlbdogparknow@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Share a Story</h1>

        <p className={styles.subtitle}>
          Tell us why a real dog park matters to you. Your story helps strengthen
          the movement.
          <br />
          <span className={styles.emailNote}>
            Your submission will be emailed to: dtlbdogparknow@gmail.com — you’ll
            be able to review your message and attach photos before sending.
          </span>
        </p>

        {/* NEW: Story Title */}
        <input
          type="text"
          className={styles.titleInput}
          placeholder="Story title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className={styles.textarea}
          placeholder="Write your story here..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
          required
        />

        <p className={styles.attachNote}>
          You can attach photos after your email app opens.
        </p>

        <button className={styles.submit} onClick={handleSubmit}>
          Send Story
        </button>
      </div>
    </div>
  );
}
