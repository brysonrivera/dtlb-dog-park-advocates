import React, { useState } from "react";
import styles from "./Contact.module.css";

type Representative = {
  id: string;
  label: string;
  email: string;
};

const REPRESENTATIVES: Representative[] = [
  {
    id: "mayor",
    label: "Mayor Rex Richardson",
    email: "mayor@longbeach.gov",
  },
  {
    id: "d1",
    label: "Councilmember Mary Zendejas – District 1",
    email: "district1@longbeach.gov",
  },
  {
    id: "d2",
    label: "Councilmember Cindy Allen – District 2",
    email: "district2@longbeach.gov",
  },
  {
    id: "d3",
    label: "Councilmember Kristina Duggan – District 3",
    email: "district3@longbeach.gov",
  },
  {
    id: "d4",
    label: "Councilmember Daryl Supernaw – District 4",
    email: "district4@longbeach.gov",
  },
  {
    id: "d5",
    label: "Councilmember Megan Kerr – District 5",
    email: "district5@longbeach.gov",
  },
  {
    id: "d6",
    label: "Councilmember Suely Saro – District 6",
    email: "district6@longbeach.gov",
  },
  {
    id: "d7",
    label: "Councilmember Roberto Uranga – District 7",
    email: "district7@longbeach.gov",
  },
  {
    id: "d8",
    label: "Councilmember Tunua Thrash-Ntuk – District 8",
    email: "district8@longbeach.gov",
  },
  {
    id: "d9",
    label: "Councilmember Dr. Joni Ricks-Oddie – District 9",
    email: "district9@longbeach.gov",
  },
];

const CAMPAIGN_CC = "dtlbdogparktoday@dtlbdogparktoday.com";

const Contact: React.FC = () => {
  const [subject, setSubject] = useState(
    "Support for a Downtown Long Beach dog park"
  );
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<Record<string, boolean>>(() => {
    // default: Mayor + D1 selected, everything else false
    const initial: Record<string, boolean> = {};
    REPRESENTATIVES.forEach((rep) => {
      initial[rep.id] = rep.id === "mayor" || rep.id === "d1";
    });
    return initial;
  });

  const allSelected = REPRESENTATIVES.every((rep) => selected[rep.id]);
  const anySelected = REPRESENTATIVES.some((rep) => selected[rep.id]);

  const toggleRep = (id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelectAll = () => {
    setSelected(() => {
      const next: Record<string, boolean> = {};
      const shouldSelectAll = !allSelected;
      REPRESENTATIVES.forEach((rep) => {
        next[rep.id] = shouldSelectAll;
      });
      return next;
    });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const chosenEmails = REPRESENTATIVES.filter((rep) => selected[rep.id]).map(
      (rep) => rep.email
    );

    if (chosenEmails.length === 0) {
      alert("Please select at least one representative to email.");
      return;
    }

    const to = chosenEmails.join(",");
    const baseGreeting =
      "Dear Downtown Long Beach representatives,\n\n";
    const footer =
      "\n\n---\nName:\nNeighborhood:\nPreferred contact (optional):\n";

    const body = baseGreeting + message + footer;

    const mailtoUrl =
      "mailto:" +
      encodeURIComponent(to) +
      `?cc=${encodeURIComponent(CAMPAIGN_CC)}` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Your DTLB Representatives</h1>

      <p className={styles.intro}>
        Use this page to send a message about the need for a safe, spacious
        dog park in Downtown Long Beach. Choose which representatives you’d
        like to contact, write your message, and we’ll open your email client
        with everything filled in.
      </p>

      <div className={styles.layout}>
        {/* Map section */}
        <section className={styles.mapSection}>
          <h2 className={styles.subheading}>DTLB District Map</h2>
          <p className={styles.mapText}>
            Use this redistricting map to find out which council district you
            live in. Then select your councilmember on the right.
          </p>
          <img
            src="https://www.longbeach.gov/globalassets/redistricting/media-library/images/maps/council_small_8.5x11l_no_photos.jpg"
            alt="Downtown Long Beach council districts redistricting map"
            className={styles.mapImage}
          />
          <p className={styles.mapHint}>
            Don’t worry if you’re not sure — you can also select all
            representatives so everyone sees your message.
          </p>
        </section>

        {/* Form section */}
        <section className={styles.formSection}>
          <form onSubmit={handleSend}>
            <h2 className={styles.subheading}>Who would you like to email?</h2>

            <div className={styles.selectAllRow}>
              <label>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleSelectAll}
                />{" "}
                Select all (Mayor + all 9 districts)
              </label>
            </div>

            <div className={styles.repsGrid}>
              {REPRESENTATIVES.map((rep) => (
                <label key={rep.id} className={styles.repOption}>
                  <input
                    type="checkbox"
                    checked={!!selected[rep.id]}
                    onChange={() => toggleRep(rep.id)}
                  />
                  <span className={styles.repLabel}>{rep.label}</span>
                  <span className={styles.repEmail}>{rep.email}</span>
                </label>
              ))}
            </div>

            <h2 className={styles.subheading}>Your message</h2>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Subject
                <input
                  className={styles.input}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>
                Message
                <textarea
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share why a real dog park in Downtown Long Beach matters to you, your dog, and your neighbors..."
                  required
                />
              </label>
              <p className={styles.helper}>
                Your email will open with a greeting and space at the bottom to
                add your name and neighborhood.
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={!anySelected}
            >
              Open email to selected representatives
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
