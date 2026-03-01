import React, { useEffect, useState } from "react";
import styles from "./DogCarousel.module.css";
import doggieP from "./../assets/doggie-pictures.jpg";
import dogParkParty from './../assets/dog-park-party.jpg'
import kikoRain from './../assets/kiko-rain.jpg'
import blackjack from './../assets/blackjack.jpg'

type CarouselImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const IMAGES: CarouselImage[] = [
  { src: doggieP, alt: "Picture of dogs from Cesar Chavez Dog Community"},
  { src: dogParkParty, alt: "End of summer party in Cesar Chavez Dog Community"},
  { src: kikoRain, alt: "Picture of cool boston terrier in the rain"},
  { src: blackjack, alt: "Portrait picture of BlackJack"},
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

