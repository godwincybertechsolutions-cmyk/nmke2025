import { Itinerary } from './types';

export const APP_NAME = "New Manyatta Kenya";

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Mountain Villas', path: '/mountain-villas' },
  { name: 'Safaris', path: '/safaris' },
  { name: 'Apartments', path: '/urban-apartments' },
  { name: 'More', path: '/others' },
];

export const MOUNTAIN_VILLA_PRICING = [
  {
    title: "Family Retreat",
    price: "Ksh 60,000",
    unit: "/night",
    features: ["Accommodates 4-6 pax", "Full House Access", "Daily Housekeeping", "Fireplace Service"]
  },
  {
    title: "Couples Getaway",
    price: "USD 120",
    unit: "/person",
    features: ["Master Suite Access", "Private Dining", "Welcome Champagne", "Guided Nature Walk"]
  },
  {
    title: "Long Stay",
    price: "Ksh 270,000",
    unit: "/month",
    features: ["Dedicated Workspace", "High-speed Fiber", "Laundry Service", "Utility Management"]
  }
];

export const SAFARI_ITINERARIES: Itinerary[] = [
  {
    id: "3n-mt-kenya",
    title: "3-Night Safari: Base of Mt. Kenya",
    duration: "3 Nights, 4 Days",
    locations: ["Mt. Kenya Base", "Aberdare National Park", "Ol Pejeta Conservancy", "Solio Ranch"],
    description: "A rich northern circuit sampler with waterfalls, rhinos, and bonfire evenings at the foot of Mt. Kenya.",
    image: "https://ecoadventuresafaris.com/wp-content/uploads/2023/01/Kenya-1-1200x675.jpg",
    pricePerPerson: "On Request",
    days: [
      {
        day: 1,
        title: "Arrival",
        activities: [
          "Private poolside welcome with drinks & snacks",
          "Evening bonfire (weather-permitting)",
          "Dinner prepared to your liking",
          "Overnight in elegant suite"
        ],
        lodging: "Mt. Kenya Base Home"
      },
      {
        day: 2,
        title: "Aberdare National Park",
        activities: [
          "7:00 AM departure with packed lunch",
          "Full-day game drive to elevations of ~3,000m",
          "Wildlife: elephants, buffaloes, black rhinos, bongo antelope",
          "Lunch near waterfalls",
          "Evening swim/games and dinner"
        ],
        lodging: "Mt. Kenya Base Home"
      },
      {
        day: 3,
        title: "Ol Pejeta Conservancy",
        activities: [
          "Half-day safari and conservation visit",
          "Rhino encounters and orphaned/sick animal care",
          "Late barbecue lunch (grilled lamb & salad)",
          "Pool relaxation, cocktails, optional massage",
          "Dinner under soft lights"
        ],
        lodging: "Mt. Kenya Base Home"
      },
      {
        day: 4,
        title: "Solio Ranch & Departure",
        activities: [
          "Early breakfast",
          "Half-day game drive at Solio (noted for black & white rhinos)",
          "Wildlife: zebras, lions, antelopes",
          "Fresh lunch before departure"
        ],
        lodging: "Check-out"
      }
    ]
  },
  {
    id: "weekend",
    title: "Weekend Safari (3 Days, 2 Nights)",
    duration: "2 Nights, 3 Days",
    locations: ["Mt. Kenya Base", "Aberdare National Park", "Ol Pejeta Conservancy"],
    description: "Where every moment feels like an escape. A short, evocative journey through highlands and rhino country.",
    image: "https://www.onthegotours.com/repository/Tsavo-West-National-Park-watering-hole--Kenya-safaris--On-The-Go-Tours-831311706788391_crop_flip_2250_1200_f2f2f2_center-center.jpg",
    pricePerPerson: "On Request",
    days: [
      { day: 1, title: "Arrival at New Manyatta", activities: ["Bonfire welcome with drinks & snacks", "Cozy evening under the stars"], lodging: "Mt. Kenya Base Home" },
      { day: 2, title: "Aberdare National Park", activities: ["7:00 AM departure with packed lunch", "Highland forests to 3,000m", "Waterfalls lunch stop"], lodging: "Mt. Kenya Base Home" },
      { day: 3, title: "Ol Pejeta Conservancy", activities: ["Half-day safari incl. last northern white rhinos", "Conservation learning", "Hearty barbecue lunch", "Departure"], lodging: "Check-out" }
    ]
  }
];

export const URBAN_APARTMENTS = [
  {
    id: "alba-gardens",
    name: "Alba Gardens Apartments",
    location: "Kasuku Road, Kilimani (near Jabavu Road)",
    floors: [12, 15, 17],
    units: { twoBedroom: 3, oneBedroom: 1 },
    features: [
      "Entrance hallway with storage",
      "Guest half-bathroom",
      "Spacious lounge with balcony",
      "Dining area for six",
      "Fully equipped open kitchen with island",
      "All bedrooms ensuite",
      "Smart TV",
      "Fast stable Internet",
      "Coffee maker, Blender",
      "Water Dispenser",
      "Washer & Dryer",
      "Bathroom & Pool towels",
      "Iron & Board",
      "Cloth rack",
      "Security entry system"
    ],
    facilities: [
      "Free parking",
      "Swimming pool with rest area",
      "Kids' play area with climbing wall",
      "Gym with separate M/F bathrooms",
      "Property management office"
    ],
    services: [
      "12hrs Reception",
      "24hrs Security",
      "Weekly Housekeeping (extra days charge)",
      "In-Person Check-In",
      "Free Car Hire Arrangement (transport charges to guest)"
    ],
    surrounding: [
      "Calm, secure neighborhood next to Kilimani Police Station",
      "4 min to Yaya Mall & Adlife Plaza",
      "10 min to Nairobi City Center",
      "20 min to Karen",
      "Within 30 min to many restaurants"
    ],
    image: "/assets/Alba%20Gardens%20B1702/A17%20Lounge%20Area.jpg",
    images: [
      "/assets/Alba%20Gardens%20B1702/A17%20Lounge%20Area.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Lounge%20Area%20(b).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Lounge%20Area%20(c).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Dining%20Area.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Kitchen.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Kitchen%20(b).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Kitchen%20(c).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Kitchen%20Appliances.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Laundry%20Area.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Balcony.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Master%20Bedroom.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Mater%20Bedroom%20(b).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Guest%20Bedroom%20.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Guest%20Bedroom%20(b).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Guest%20Bedroom%20(c).jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20GB%20Bathroom.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Guest%20Bathroom.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Shower.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Reception.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Entrance.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Corridor.jpg",
      "/assets/Alba%20Gardens%20B1702/A17%20Overview%20Lounge%20Area.jpg"
    ]
  },
  {
    id: "laurel-hill",
    name: "Laurel Hill Suite",
    location: "Mawensi Road, Upper Hill, Nairobi",
    features: [
      "Spacious lounge with balcony facing Ngong Hills",
      "Fully equipped open-plan kitchen with island",
      "Guest half-bathroom",
      "One-bedroom ensuite with outdoor seating",
      "Smart TV",
      "Fast reliable Internet",
      "Coffee Maker",
      "Water Dispenser",
      "Washer & Dryer",
      "Bathroom/Pool Towels & Robes",
      "Iron Box"
    ],
    facilities: [
      "Free parking",
      "Rooftop infinity swimming pool",
      "Conference room & Dance room",
      "Well-equipped Gym",
      "Male & Female Sauna",
      "Rooftop Restaurant: Royal Mile (7am-9pm, free delivery)"
    ],
    services: [
      "12hrs Reception",
      "24hrs Security",
      "Weekly Housekeeping (extra days charge)",
      "In-Person Check-In",
      "Free Transport Arrangement (transport charges to guest)"
    ],
    surrounding: [
      "Calm commercial hub with embassies & HQs",
      "1.6 km to Radisson Blu (4 min)",
      "8 min to Highway Mall & Carrefour Mega",
      "5 km to Wilson Airport",
      "3 km to Nairobi City Center (8-12 min)",
      "1 km to Kenyatta National Hospital",
      "6.1 km to National Museum of Kenya",
      "8 km to Nairobi National Park"
    ],
    image: "/assets/Laurel%20Hill%20Suites/L6%20Lounge%20Area%20(c).jpg",
    images: [
      "/assets/Laurel%20Hill%20Suites/L6%20Lounge%20Area%20(c).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Lounge%20Area%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Lounge%20Area%20(d).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Kitchen%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Kitchen%20Island%20.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Laundry%20Area.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Bedroom%20Overview.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Bedroom%20Balcony.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20MB%20Bathroom.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Bathroom%20Essentials.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Shower.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Gym%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Gym%20(c).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Sauna.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Sauna%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Reception.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Reception%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Rooftop%20Pool.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Rooftop%20Pool%20(b).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20Rooftop%20Pool%20(c).jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20WallArt%20.jpg",
      "/assets/Laurel%20Hill%20Suites/L6%20WallArt%20(b).jpg"
    ]
  }
];

export const MOUNTAIN_VILLAS = [
  {
    id: "burguret",
    name: "Burguret Mountain Villa",
    location: "Burguret, slopes of Mt. Kenya (near Burguret River)",
    propertyType: "3-bedroom luxury bungalow on 2.2 acres",
    architecture: "British x Kenyan Lamu coastal fusion",
    features: [
      "Spacious lounge with fireplace",
      "Indoor dining for six",
      "Outdoor seating overlooking swimming pool",
      "Outdoor dining for eight",
      "Outdoor patio with swimming pool",
      "Fully equipped separate kitchen with dining for four",
      "Three bedrooms all ensuite (master with walk-in closet)",
      "Well-equipped laundry room",
      "Starlink Internet",
      "Water Dispenser with drinking water"
    ],
    facilities: [
      "2-car designated parking",
      "Staff quarters on site"
    ],
    services: [
      "24hrs Security",
      "Groundskeeper & Housekeeper",
      "In-house Chef on request (charge)",
      "In-Person Check-In",
      "Car Hire Services recommended"
    ],
    nearbyParks: [
      "Solio Ranch Conservancy (30 mins)",
      "Ol Pejeta Conservancy (30 mins)",
      "Aberdare National Park (50 mins)",
      "Mt. Kenya National Park (30 mins)",
      "Samburu National Reserve (1.5 hrs)",
      "Shaba National Reserve (1.5 hrs)",
      "Buffalo Springs National Reserve (1.5 hrs)",
      "Meru National Park (2-3 hrs)"
    ],
    images: [
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20House%20Overall%20View.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20House%20Entrance.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Entrance%20Pathway.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20House%20Side%20View.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Living%20Room%20Overview.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Living%20room%201.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Living%20Room%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Buruguret.%20Living%20area%20Overview.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Kitchen.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Kitchen%201.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Kitchen%201.0.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Kitchen%20Appliances.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Outside%20Lounge%20Area.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Outside%20Patio%20seating%20area.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Outside%20Patio%20dining%20area.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Outside%20Patio%20View.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Outside%20Patio%20View%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Swimming%20Pool%201.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Swimming%20Pool%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%201st%20Guest%20Bedroom%20.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%201st%20Guest%20Bedroom%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%201st%20Guest%20Bedroom%203.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%202nd%20Guest%20Bedroom%20.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%202nd%20Guest%20Bedroom%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%202nd%20Guest%20Bedroom%203.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%202nd%20Guest%20Bedroom%204.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Master%20Bedroom%20.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Master%20Bedroom%202.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Master%20Bedroom%203.jpg",
      "/assets/Burguret%20Mountainside%20Villa/Burguret.%20Master%20Bedroom%20walk-in%20closet.jpg"
    ]
  },
  {
    id: "narumoru",
    name: "Narumoru Mountain Villa",
    location: "New Manyatta, Narumoru (bordering Mt. Kenya National Park)",
    features: [
      "Spacious lounge with fireplace",
      "Indoor dining for six",
      "Outdoor seating overlooking grounds",
      "Outdoor patio",
      "Fully equipped separate kitchen with dining for four",
      "Three bedrooms + one separate bathroom (master ensuite with walk-in closet)",
      "Well-equipped laundry room",
      "Starlink Internet",
      "Water Dispenser with drinking water"
    ],
    facilities: [
      "2-car designated parking",
      "Staff quarters on site",
      "Camping site with barbecue area",
      "Accessible river frontage"
    ],
    services: [
      "24hrs Security",
      "Groundskeeper & Housekeeper",
      "In-house Chef on request (charge)",
      "In-Person Check-In",
      "Car Hire Services recommended"
    ],
    nearbyParks: [
      "Solio Ranch Conservancy (30 mins)",
      "Ol Pejeta Conservancy (45 mins)",
      "Aberdare National Park (50 mins)",
      "Mt. Kenya National Park (15 mins)",
      "Samburu National Reserve (1.5 hrs)",
      "Shaba National Reserve (1.5 hrs)",
      "Buffalo Springs National Reserve (1.5 hrs)",
      "Meru National Park (2-3 hrs)"
    ],
    images: []
  }
];

export const COFFEE_PRODUCTS = [
  {
    id: 1,
    name: "Mt. Elgon Reserve",
    roast: "Medium Dark",
    price: "Ksh 1,200",
    image: "https://previews.dropbox.com/p/thumb/AC2OB6hLNbrf3f6dZxiqU8ZILCzXft3k1n6ySuvDG_QS3zLu9KG95NR0jGzOtOsiNW1egEhOUvAt3MjFXFp8O-in2ETO0Kv0a7XDGdRYxSGWAqifFS2RWfT3ban7Wt74GmZHvaMuT8KVUuNDTNJNGTQ43n1S7X6jLlOSwO4SWUGyFD1X3F8u4A5_Nt2p3dt1dYE63sKiob8jIG7bIG0kDNRPB-bnNdTr8MJOvDbmE51z4E1hF5A0j6AdXhZk56Uge8oh8vU9s1e3njUs2f4nVCwU479nX9Uo8rGrMPK0CurlXRmh8kcdq7o2-7P97CBG0IMutfIhx69mjRl7eVMeKHUm/p.png",
    notes: "Chocolate, Citrus, Spice"
  },
  {
    id: 2,
    name: "Volcanic Gold",
    roast: "Light",
    price: "Ksh 1,500",
    image: "https://previews.dropbox.com/p/thumb/AC1zW4cM_pB4vPCPxkvc-flXez_Mp6prcaNgoq6iOd0yLwkvkaZTh2F709Cwjk672UCJiVNls5GuzTgwoeLY1IB8ycN3giY-4MGtm3ozEZ1sfZO0LjtQhxcVyHp6LkD-Yj9kI-ELlRu-I-LY4ubHclI7e-KRdLWrANlTHHE7S-KXQ1lUAd9HEtLl-CYTGFVfniTKSedpcZCqtYnWx5JsieKgcd1R5NrmraBx6PdYF682gl_Y2Q4sgKh_vKMfvlGhcK0c-90uZwNqNS3_-i8Cmdhg2sdRoB-LeBDmniBQMlmEHxBHqzaZLQs3qYRHpkQ3h1qxq1klvH_JdMrbU_zvBwPG/p.png",
    notes: "Floral, Berry, Honey"
  }
];

export const CSR_PROJECTS = [
  {
    title: "Reforestation Initiative",
    description: "For every booking, we plant 5 indigenous trees in the Mt. Kenya forest reserve.",
    image: "https://i.guim.co.uk/img/media/c6fc22bc8bdbcde8a8f52a9132f07f7458140b0e/0_11_4032_2419/master/4032.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=519393977c1d3ffce8f325bf3fdaa571"
  },
  {
    title: "Local Education Fund",
    description: "Supporting primary schools in Narumoru with books, desks, and solar lighting.",
    image: "https://images.squarespace-cdn.com/content/v1/674774e95d92814e89fc20b1/0918a9a8-9b92-4c67-bab6-407df4bd2967/30a97c86aee7100671a115256d318853.jpeg"
  }
];

export const BLOG_POSTS = [
  {
    title: "New Manyatta Philosophy",
    date: "",
    excerpt: "Contemporary, luxurious, culturally rich stays and safaris that embody Kenya's vibrant aesthetics.",
    image: "https://picsum.photos/seed/philosophy/600/400"
  }
];

export const GALLERY_IMAGES = [
  "https://ucc039f79de42476ea72aaac7b16.previews.dropboxusercontent.com/p/thumb/AC27qkwUsk75ZYRKvduNKya2DqS3usNGCRx6D5wB5_m6YhbICsgznkgyUYjAH1XnQ-n6MHcF8BbD39HPYoOKt4jE9iYWHxqrCWJ4H9egmYr7RfknsLU96PQEFs_dqZul9Ub__i543CmQAtISnPOoyyGfC3g8srayZLGktDjFlOQ_5qiKX24QG0LPvsH6E9gSL9T8cTSddoJberRv4yLwn-9FzORkVFtpEU8DmcncEYepVFNh8rzyMzppkWF-u7R54gqm8lu-r4wcfvW_zJtIPOab5QFfjXBU1vmn3fWyBM06tDgY0dGTw2pyle-jldXg_F7w1oYdbpjjU_w99HVU2W5s0XrEZA7OUdyjjQa3WuYZc5kOvXyw5REL-9ZJUROZNWVE_bfco2cyEBcDRdEbSGP-HDNv6oYmN2L9TnDCtAfLSDhZrcZS_oVSKMYPz4iKWEhCKnsi933BF5kkHhgWTlqx0nGIHNrUslfc-nyhHljNTdNDu59Bf7ZF56GhY_11mniZOn5oeB0wVgdOkXW2Q18n1hJz50zv9-z2mEIXjALSwA/p.jpeg",
  "https://uc4102730453a6bb99b2a4119bbe.previews.dropboxusercontent.com/p/thumb/AC1UXMolnA9dz8gtNSIpXmL2n35940L5JBziloUqBLkyktaUhEUjmP9_km3ALsndXsQbg0X9bWuu3OJNFu-Tgqikn90vKp6k5ylMsnqXuU4XevKWwb5yH0-COhonFV4Q_m4f4_7Sw3lgQ_ZqTsJR97htQqLGsZredqhPOeeBAZQlfZ8l-O4Wx4c2qbhcEHPGeJWinPMjWSXILKEwPtw4v6bORB-vSN3unx3WRW9yX8LnjIFTFyuipOjxZRCDGLMGkN9GNVDfszVSbSPAv40rPdrq-Vs2BMhelT1GYkZ3xkpVBIDPV8V5F_X7ZToSelPh1UyhEEFfNYMBALefiJsf5KPTf1dGE7hdwduudT00IyWWBUdzbzPMjMd-HKDRMk9xBkM0wRx2kRuKzaHcXdnfXyzfPwgnYdk2nSCRwwoXnWtBp0aRApW66OvA2qNSxBHCjKtKj1bujqD9qb0OqWZWcC3KHreWXRlxlJ--aKOqz4H9dA/p.jpeg",
  "https://uc71ac3d54767bf04a0bd6add9d9.previews.dropboxusercontent.com/p/thumb/AC054MTjxtQ76v0-scIvsArNy120byxWK8D8f14PgTxeEAkUQ74K5htZOocvDYw5-_xR_VeP_eGkrGII6n6IGFuJpAb3D8mUuk_CssR0tWQS51x7yzjvuURbIKj5fAkIFXpEzRz9kto-sye_okq85MJ6RS_zGcUSXo9y4AomeXbaYNox78HCfWN03bKC9u8Wed7KQuXAW0i5zCX8CD5v6W1yozj5fZgR-Fgo_1vdz4k5N-n0kuXMTH3deLUWP9o6gjFPztXyhWbUakSEsa-u3hahehItcJUcwK4KExusq0xl9KOs0Pqs0ejFro-lcY9c0D-M6Z9Cb0IPsCa7voJMRp2GgbYASPo-J5XAcBfICF3a2YCrawqnBVv9r7BVo6wxqPB8JuZFNQj3vo11fwu8cIcXaF4xDQS4vKXDDecu8WoTxw/p.jpeg",
  "https://uc5d99a722590fcc00c7d326b569.previews.dropboxusercontent.com/p/thumb/AC3QgeiOi4AsgVyw_nzkVBMwLNM-5GVR4ppwNCFYeTmRuauoNuJeX3Zpbl6JaCxv_iWJavQNUovl_ziMLtGTcPNZWQAu1Y-ZLbEfPg1r3eLiBNfHmyUbMLSLe37d5NPYBPW4ZudBD4AEhrly38Xql-2P-PgCsEvB3cYDAgbo0q2DgOhbR-I8iQWqsrrQY44iiCa37bwOweZpb33JeJFQeWGZm7OTRqJWQ5w8azDVNU8b2Xd8PevNCAMhWJeqaq3KshydnHEKT3A_JscD70HvKe3kdUV88PWfcAXMeBSnzK7UOkkZmtwNKeF05O6Ojv0DLt4joxDBIYAPu9vhcUoz-L0hIAD_bKdgfFyVW9CxHAVgLSrabxzjm97DVpPX-AUt_LG3dHoVbWY6awjetyLO8fwMYYoWjMeNNTb0CyrR9SVa7Dg6-LVpSfeH2Qe-a0zNsConhJLVfqvKZbX6S_Vs3YVDC38q627HUEinIbNeOC3iHw/p.jpeg",
  "https://uc16b8279a66f0497eb0ee464a09.previews.dropboxusercontent.com/p/thumb/AC0fl56v5Gi-RA5ezk5VFKbA0nrQTaL465-4LGzwlqYSWU9hcD7tnUkSnwjgMD3w4QJApfcj1BHxZVe2Ckh8Bhq1grOuEbv1EqbwIDhww1Ilo8Kv7xYwGKNgfhGEm3CP19lstTMiOk4MBwFxHy-aNkgHdkFeOJ4kSvFI6HuwFZTKXWlxkYO04nDIxRHxMS8Ilj-TZpgje6TWLjROI1FjIN45L-q8VGPSEeNYHgXkoE-JQQNNn_kscBkooRXYv7X7vhxYvtkEPFeoGZJTVno3tPTjeCczFQL_sKjsEnDyZaYFyWwuHFpdKhlDxXNVCxnTlQWZ3Kx2glQmKECI9NGduA14EvmAHCNL_-GjljStLaVER0MvXZpwkyuIYXLuMEzayHeL71BJFG_J63PA3h7eg2oCV71S1vp3tBcg5s39vbqO9sE91wxCceHcVTiJnNgYTvafGjr-93WSYX3lNV91ht79UFAh9a7iRyrkpewROoxLQ7BrZi2_W0vEluWYmL3E5lj5JFlzSw6dCLk9RlEBqO4r_iIYMIpWJwUOXKMWKldwUg/p.jpeg",
  "https://uc3fbacc0d09243d46339806c380.previews.dropboxusercontent.com/p/thumb/AC29DlZFjFghfznnATRoefn7Vw3WRMW18myVQbsyvM3OUfJxQpzd2b4scYkNfxXSa2lf_UPo6sDAotSZGx4pWL7wKWkXJNd5neCv31hMp5tblwFKChg-5Db3MAcbyt_RotWL4kNvsK00VC-sKvTdmrXLdTACApboaQ-RVtc6q0KKSFoo5uBy5-gkVgB_ot7zLa-E6RYyEYW4xwdy9HatZJBY4FLfbdGo5LXXAZry5C586r413xCQ8sVn_4qTWjhauWrLFCj34ZSI0EUgcnTow7zKeETwQVFAOl7-CstOmrRro09pIQVe4z5VW969jg-UX1r66boa1H6pcYDYVtP9141LNbpvoza41uRBin4s7mT38EE2IKtLwdClYAPpbmX6wIpE89lhMdf9Ov-zAG4gK-lEBw4n-1-1DFa8G4r1-qN_5WW0M-Ck-8aqCuT_D0foZ2RC44DbtM_1g2Rn-sSUDTMwVXLBeN8aVwJFXUqxTtixvw/p.jpeg",
];
