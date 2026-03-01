import React, { useState } from "react";
import styles from "./CreateEvent.module.css";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // No backend — open email client with the event data
    const body = `
New Event Submission:

Title: ${title}
Date: ${date}
Summary: ${summary}

Details:
${details}
    `;

    window.location.href =
      "mailto:dtlbdogparktoday@dtlbdogparktoday.com" +
      `?subject=${encodeURIComponent("New Event Submission")}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Create an Event</h1>
      <p className={styles.headingDescription}>Have an upcoming cleanup, meetup, workshop, or dog-friendly gathering in Downtown Long Beach?
Use this form to submit your event so we can feature it on the DTLB Dog Park Now community calendar.</p>

<p className={styles.headingDescription}>Sharing your event helps connect neighbors, strengthens local involvement, and builds momentum for creating a real dog park in Downtown Long Beach.</p>

<p className={styles.headingDescription}> Please include as many details as possible so residents know what to expect.
Once submitted, your event will be reviewed and added to the public calendar.</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Event Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Event Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label>
          Summary
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </label>

        <label>
          Details
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={6}
            required
          />
        </label>

        <button type="submit" className={styles.submit}>
          Submit Event
        </button>
      </form>
    </div>
  );
}
