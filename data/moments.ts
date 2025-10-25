export interface IconicMoment {
  id: number;
  title: string;
  arc: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'standard';
}

export const iconicMoments: IconicMoment[] = [
  {
    id: 1,
    title: "King of the Pirates",
    arc: "Romance Dawn",
    description: "Luffy's first declaration of his dream",
    image: "/moments/moment-1.webp",
    size: "large"
  },
  {
    id: 2,
    title: "Recruiting Zoro",
    arc: "Romance Dawn",
    description: "Saving the pirate hunter from execution",
    image: "/moments/moment-2.webp",
    size: "medium"
  },
  {
    id: 3,
    title: "Luffy... Help Me!",
    arc: "Arlong Park",
    description: "Defeating Arlong to save Nami",
    image: "/moments/moment-3.webp",
    size: "standard"
  },
  {
    id: 4,
    title: "Brothers Reunion",
    arc: "Alabasta",
    description: "Meeting Ace in the desert",
    image: "/moments/moment-4.webp",
    size: "standard"
  },
  {
    id: 5,
    title: "Golden Bell",
    arc: "Skypiea",
    description: "Ringing the bell to fulfill a 400-year promise",
    image: "/moments/moment-5.webp",
    size: "large"
  },
  {
    id: 6,
    title: "I Want to Live!",
    arc: "Enies Lobby",
    description: "Robin's declaration at the Tower of Justice",
    image: "/moments/moment-6.webp",
    size: "medium"
  },
  {
    id: 7,
    title: "Gear Second & Third",
    arc: "Enies Lobby",
    description: "Unveiling new powers to save Robin",
    image: "/moments/moment-7.webp",
    size: "standard"
  },
  {
    id: 8,
    title: "Merry's Farewell",
    arc: "Post-Enies Lobby",
    description: "Thank you for loving me",
    image: "/moments/moment-8.webp",
    size: "standard"
  },
  {
    id: 9,
    title: "Celestial Dragon Punch",
    arc: "Sabaody",
    description: "Standing up for what's right",
    image: "/moments/moment-9.webp",
    size: "large"
  },
  {
    id: 10,
    title: "Ace's Sacrifice",
    arc: "Marineford",
    description: "Thank you for loving me",
    image: "/moments/moment-10.webp",
    size: "medium"
  },
  {
    id: 11,
    title: "3D2Y Message",
    arc: "Post-War",
    description: "A message of hope and determination",
    image: "/moments/moment-11.webp",
    size: "standard"
  },
  {
    id: 12,
    title: "Gear Fourth Boundman",
    arc: "Dressrosa",
    description: "King Kong Gun defeats Doflamingo",
    image: "/moments/moment-12.webp",
    size: "standard"
  },
  {
    id: 13,
    title: "Gear Fourth Snakeman",
    arc: "Whole Cake Island",
    description: "Surpassing Katakuri's future sight",
    image: "/moments/moment-13.webp",
    size: "standard"
  },
  {
    id: 14,
    title: "Gear Fifth Awakening",
    arc: "Wano",
    description: "This is fun! The warrior of liberation",
    image: "/moments/moment-14.webp",
    size: "large"
  },
  {
    id: 15,
    title: "Bajrang Gun",
    arc: "Wano",
    description: "The fist that defeated Kaido",
    image: "/moments/moment-15.webp",
    size: "medium"
  }
];
