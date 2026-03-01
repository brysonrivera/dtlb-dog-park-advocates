import React, { useState } from "react";
import styles from "./SignUp.module.css";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [volunteer, setVolunteer] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("DTLB Dog Park — Sign Me Up!");

    let body = `Hi,\n\nI am interested in joining the DTLB Dog Park movement.\n\n`;
    body += `Name: ${firstName} ${lastName}\n`;
    body += `Email: ${email}\n`;

    if (volunteer) {
      body += `\nI am also interested in volunteering!`;
    }

    body += `\n\nThanks!`;

    const mailto = `mailto:dtlbdogparknow@gmail.com?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;

    window.location.href = mailto;
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Join the Movement</h1>
        <p className={styles.subtitle}>
          Sign up to receive updates, event invites, and ways you can help build
          a real dog park for DTLB.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={volunteer}
              onChange={(e) => setVolunteer(e.target.checked)}
            />
            <span>I want to volunteer</span>
          </label>

          <button type="submit" className={styles.submit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

