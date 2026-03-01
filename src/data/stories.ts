// src/data/stories.ts
import kikoRain from "../assets/kiko-rain.jpg"

export type StoryType = {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
  image?: string;
};

const rawStories: StoryType[] = [
  {
  id: "milo-fetch-legend",
  title: "Milo: The Fetch Legend of DTLB",
  date: "Feb 12, 2025",
  preview: "Milo’s endless fetch energy inspires everyone at the park.",
  content: `
    Milo is known for one thing: fetch at lightning speed.
    Every meetup, he brings his neon tennis ball and rallies every dog around.
    The lack of a safe, dedicated dog field limits how far he can run — 
    but Milo reminds us exactly why DTLB needs real room to play.
  `
},
{
  id: "kiko-rain-hero",
  title: "Kiko: Rain or Shine",
  date: "Jan 7, 2025",
  preview: "Kiko shows up—even in the rain—to see his friends.",
  image: kikoRain,
  content: `
    Kiko never misses a meetup. Even during light rain, he stands proudly 
    in his little raincoat, wagging at everyone who walks by.
    A dedicated dog park would give dogs like Kiko a safe place in all seasons.
  `
},
{
  id: "hazel-new-friend",
  title: "Hazel Finds Her New Best Friend",
  date: "Aug 19, 2024",
  preview: "Hazel used to avoid big dogs—until she met Rocky.",
  content: `
    For months, Hazel stayed close to her human, too nervous to explore.
    Then she met Rocky, a gentle giant who showed her the joy of play.
    Their bond proves how socialization builds confidence—something a real
    DTLB dog park could encourage every day.
  `
},
{
  id: "rocky-guardian",
  title: "Rocky, the Gentle Guardian",
  date: "May 14, 2025",
  preview: "Rocky watches over the little pups like a big brother.",
  content: `
    Rocky is loved for his gentle nature. New or anxious dogs often gravitate to him.
    He walks around the group with calm energy, encouraging play while keeping peace.
    A designated dog park would give dogs like Rocky the space to thrive as leaders.
  `
},
{
  id: "lola-happy-strut",
  title: "Lola’s Happy Strut Through DTLB",
  date: "Mar 2, 2024",
  preview: "Lola’s wiggle walk brightens every morning.",
  content: `
    Lola loves trotting through Downtown Long Beach with her signature wiggle.
    But without a real off-leash park, she rarely gets the chance to run freely.
    A dedicated dog park would give Lola and countless others room to truly stretch their legs.
  `
},
{
  id: "duke-rescue-journey",
  title: "Duke’s Rescue Journey",
  date: "Sep 30, 2025",
  preview: "Duke came from a tough past, but the community helped him heal.",
  content: `
    When Duke was adopted, he was scared of everything—sounds, people, even grass.
    With slow introductions at Cesar Chavez meetups, he blossomed into a confident, loving dog.
    His story shows how crucial safe, structured spaces are for rescue dogs.
  `
},
{
  id: "bella-water-lover",
  title: "Bella the Water Lover",
  date: "Jul 9, 2023",
  preview: "Bella splashes in every puddle she can find.",
  content: `
    Bella lights up around water—puddles, sprinklers, anything.
    But without proper park amenities in DTLB, her love for water play is limited.
    A real dog park with water features would be a dream for pups like Bella.
  `
},
{
  id: "charlie-senior-smiles",
  title: "Charlie’s Senior Smiles",
  date: "Oct 11, 2024",
  preview: "Charlie may be older, but the dog community keeps him young.",
  content: `
    At 12 years old, Charlie enjoys slower walks and soft pats,
    but he still loves being around the younger pups.
    A proper dog park would give seniors like Charlie a safe, gentle environment
    to socialize and stay active.
  `
},
{
  id: "penny-playful-leaps",
  title: "Penny’s Playful Leaps",
  date: "Jun 5, 2025",
  preview: "Penny has hops—and no space to use them.",
  content: `
    Penny is famous for her bouncy jumps when she gets excited.
    Without a real dog park, her leaps are limited to tight spaces.
    A safe, open field would let Penny play the way she was meant to.
  `
},
{
  id: "ziggy-community-star",
  title: "Ziggy: The Community Star",
  date: "Dec 15, 2024",
  preview: "Ziggy greets every single person—and every single dog.",
  content: `
    Ziggy is the unofficial ambassador of the dog community.
    He loves welcoming new members and encouraging shy pups to play.
    A legitimate DTLB dog park would allow Ziggy’s community spirit to shine even brighter.
  `
}

];

export const STORIES = rawStories.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);


