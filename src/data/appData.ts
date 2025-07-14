
import daremiImg from "../assets/images/restaurants/daremi.jpg";
import pervoi from "../assets/images/restaurants/pervoi.webp"
// Coffee Shops
import donPabloImg from "../assets/images/cafes/donpablo.jpg";
import diesel from "../assets/images/cafes/diesel.jpg"

// Events & Outings
import ribat from "../assets/images/Sousse/ribat.jpg"
import park from "../assets/images/Sousse/s5.jpg"

// Gyms
import extra from "../assets/images/gyms/extra_fitness.jpg"


// Money Exchange
import  izi from "../assets/images/money_exchange/izi.jpg"


export interface Element {
  id: number;
  slug: string; // URL-friendly name, e.g., "da-remi"
  title: string;
  image: string;
  speciality: string;
  description: string;
  location: string;
  working_time: string;
  phone?: string;
  delivery?: boolean;
  type?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  elements: Element[];
}

// --- APPLICATION DATA ---

export const appData: Category[] = [
  {
    id: 1,
    name: "Restaurants",
    slug: "restaurants",
    elements: [
      {
        id: 101,
        slug: "da-remi",
        title: "DA REMI'",
        image: daremiImg,
        speciality: "Italian & Indian Cuisine",
        description: "Nestled in Khzama, our restaurant merges the culinary artistry of Italian and Indian cuisines, offering a unique dining experience until 2 am.",
        location: "https://www.google.com/maps/place/DA+REMI'/@35.8521946,10.6077006,17z/data=...",
        working_time: "12:00 - 02:00",
        phone: "55 578 378",
        delivery: true,
      },
      {
        id: 102,
        slug: "pervoi",
        title: "Pervoi",
        image: pervoi,
        speciality: "Italian Restaurant",
        description: "A charming bistro known for its fresh seafood, steak frites, and an intimate atmosphere perfect for a special night out.",
        location: "https://www.google.com/maps/search/l'ardoise+sousse/",
        working_time: "18:00 - 23:00 (Closed Sundays)",
        phone: "73 225 789",
        delivery: false,
      },
    ],
  },
  {
    id: 2,
    name: "Coffee Shops",
    slug: "coffee-shops",
    elements: [
      {
        id: 201,
        slug: "don-pablo",
        title: "Don Pablo",
        image: donPabloImg,
        speciality: "Artisanal Coffee & Roastery",
        description: "A cozy spot for coffee lovers, offering a wide range of single-origin beans, expert brewing methods, and delicious homemade cakes.",
        location: "https://www.google.com/maps/search/don+pablo+sousse/",
        working_time: "07:30 - 22:00",
        phone: "99 123 456",
        delivery: false,
      },
      {
        id: 202,
        slug: "the-diesel",
        title: "The Diesel",
        image: diesel,
        speciality: "Chill Cofee shop & Desserts",
        description: "Elegant and modern, Biscottino is the perfect place for a delightful brunch, gourmet pastries, and a relaxing afternoon tea.",
        location: "https://www.google.com/maps/search/biscottino+sousse/",
        working_time: "08:00 - 20:00",
        phone: "54 789 123",
        delivery: true,
      },
    ],
  },
  {
    id: 3,
    name: "Event & Outings",
    slug: "event-outings",
    elements: [
      {
        id: 301,
        slug: "ribat-tour",
        title: "Ribat Tour",
        type:"Outing",
        image: ribat,
        speciality: "",
        description: "Experience a month of culture with performances from international and local artists at the historic Roman Amphitheater. A highlight of the summer season!",
        location: "https://www.google.com/maps/search/Roman+Amphitheater+Sousse/",
        working_time: "July - August (Evenings)",
      },
      {
        id: 302,
        slug: "kantaoui-tour",
        title: "Kanatoui Tour",
        image: park,
        type:"Outing",
        speciality: "",
        description: "Explore the iconic 8th-century Ribat fortress. Learn about its history from expert guides and enjoy breathtaking views of the Medina and the sea.",
        location: "https://www.google.com/maps/place/Ribat+of+Sousse/",
        working_time: "09:00 - 17:00 Daily",
      },
    ],
  },
  {
    id: 5,
    name: "Gyms",
    slug: "gyms",
    elements: [
      {
        id: 501,
        slug: "extra-fitness-gym",
        title: "Extra Fitness Gym",
        image: extra,
        speciality: "",
        description: "World-class fitness facility with state-of-the-art equipment, a wide variety of classes (Yoga, Spinning, Zumba), and certified personal trainers.",
        location: "https://www.google.com/maps/search/gold's+gym+port+el+kantaoui/",
        working_time: "06:00 - 23:00",
        phone: "73 348 000",
      },
    ],
  },
  
  {
    id: 6,
    name: "Money Exchange",
    slug: "money-exchange",
    elements: [
      {
        id: 601,
        slug: "zitouna-exchange",
        title: "IZI - Zitouna Exchange",
        image: izi,
        speciality: "Official Currency Exchange",
        description: "Official and secure currency exchange office located conveniently near the Medina entrance. Offers competitive rates for all major currencies.",
        location: "https://www.google.com/maps/search/banque+zitouna+sousse+medina/",
        working_time: "08:30 - 16:30 (Mon-Fri)",
        phone: "73 123 456",
      },
    ],
  },
];