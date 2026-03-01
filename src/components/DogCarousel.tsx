import React, { useEffect, useState } from "react";
import styles from "./DogCarousel.module.css";

type CarouselImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const IMAGES: CarouselImage[] = [
  { src: "/../../src/assets/doggie-pictures.JPG", alt: "Picture of dogs from Cesar Chavez Dog Community"},
  { src: "/../../src/assets/dog-park-party.JPG", alt: "End of summer party in Cesar Chavez Dog Community"},
  { src: "/../../src/assets/kiko-rain.JPG", alt: "Picture of cool boston terrier in the rain"},
  { src: "/../../src/assets/blackjack.JPG", alt: "Portrait picture of BlackJack"},
];

const ROTATE_MS = 5000;

const DogCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  const current = IMAGES[index];

  return (
    <div className={styles.carousel}>
      <img
        key={current.src}
        src={current.src}
        alt={current.alt}
        className={styles.image}
        style={{ objectPosition: current.objectPosition || "center center" }}
      />
    </div>
  );
};

export default DogCarousel;

