// src/components/NavBar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDesktopMenu = (name: string | null) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* LOGO */}
        <div className={styles.logoSection}>
          <Link to="/" onClick={closeAll}>
            <img
              src="../../src/assets/logo-dtlb.png"
              alt="DTLB Dog Park Now Logo"
              className={styles.logo}
            />
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* DESKTOP NAV ITEMS */}
        <div className={styles.navItems}>
          <div
            className={styles.navItem}
            onMouseEnter={() => toggleDesktopMenu("home")}
            onMouseLeave={() => toggleDesktopMenu(null)}
          >
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
          </div>

          <div
            className={styles.navItem}
            onMouseEnter={() => toggleDesktopMenu("stories")}
            onMouseLeave={() => toggleDesktopMenu(null)}
          >
            <span>Community Stories</span>
            {openMenu === "stories" && (
              <div className={styles.dropdown}>
                <Link to="/stories" onClick={closeAll}>
                  Stories
                </Link>
                <Link to="/share" onClick={closeAll}>
                  Share a Story
                </Link>
              </div>
            )}
          </div>

          <div
            className={styles.navItem}
            onMouseEnter={() => toggleDesktopMenu("resources")}
            onMouseLeave={() => toggleDesktopMenu(null)}
          >
            <span>Resources</span>
            {openMenu === "resources" && (
              <div className={styles.dropdown}>
                <Link to="/signup" onClick={closeAll}>
                  Join the Movement
                </Link>
                <Link to="/resources/contact" onClick={closeAll}>
                  Contact Your Representatives
                </Link>
              </div>
            )}
          </div>

          <div
            className={styles.navItem}
            onMouseEnter={() => toggleDesktopMenu("events")}
            onMouseLeave={() => toggleDesktopMenu(null)}
          >
            <span>Events</span>
            {openMenu === "events" && (
              <div className={styles.dropdown}>
                <Link to="/events" onClick={closeAll}>Events</Link>
                <Link to="/events/create" onClick={closeAll}>Add an Event</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU CONTENT */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={closeAll}>
            Home
          </Link>

          <p className={styles.mobileSectionLabel}>Community Stories</p>
          <Link to="/stories" onClick={closeAll}>
            Stories
          </Link>
          <Link to="/share" onClick={closeAll}>
            Share a Story
          </Link>

          <p className={styles.mobileSectionLabel}>Resources</p>
          <Link to="/signup" onClick={closeAll}>
            Join the Movement
          </Link>
          <Link to="/resources/contact" onClick={closeAll}>
            Contact Your Representatives
          </Link>

          <p className={styles.mobileSectionLabel}>Events</p>
          <Link to="/events" onClick={closeAll}>Events</Link>
          <Link to="/events/create" onClick={closeAll}>Add an Event</Link>
        </div>
      )}
    </>
  );
}

