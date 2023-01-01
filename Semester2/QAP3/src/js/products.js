/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // Category 1 Products
  {
    id: "p1",
    title: "Thrive Logo Black",
    description: 'Our Signature Deck, Red Logo on a Black Deck - 8.0", 8.125"',
    price: 6999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p2",
    title: "Enjoi Panda Logo White",
    description: "Enjoy's Classic Panda Logo on a White Deck - 8.25\"",
    price: 6999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p3",
    title: "Chocolate Carlisle Aikens",
    description: 'Carlisle Aikens OG Chunk Chocolate Deck - 8.0"',
    price: 8999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p4",
    title: "Element Tony Hawk",
    description: "Element's Tony Hawk Signature Deck - 8.5\"",
    price: 8999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p5",
    title: "Thrive Jump Man Neon",
    description: 'Our Thrive Jump Man logo on a Neon Deck - 8.25"',
    price: 5999,
    discontinued: true,
    categories: ["c1"]
  },
  {
    id: "p6",
    title: "Bones Rodney Mullen",
    description: "Legendary Rodney Mullen's Signature Bones Deck - 7.0\"",
    price: 8999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p7",
    title: "Girl Sean Malto Mint Green",
    description: 'Sean Malto\'s 93 Til Pop Secret Girl Deck - 7.75", 8.0"',
    price: 8999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p8",
    title: "Girl Infinity Yellow",
    description: 'Girl Infinity Design Logo on a Yellow Deck - 8.0", 8.25"',
    price: 6999,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p9",
    title: "Illegal Civ Zach Saraceno White",
    description: 'Illegal Civ Zach Saraceno Pro Deck - 8.0"',
    price: 7999,
    discontinued: false,
    categories: ["c1"]
  },

  // Category 2 Products
  {
    id: "p10",
    title: "Independent Forged Hollow Trucks",
    description:
      "Independent Forged Hollow Stage 11 Skateboard Trucks Silver - Independent Sizing Chart for Details",
    price: 4999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p11",
    title: "Royal Raw Trucks",
    description: "Royal Raw Skateboard Trucks Sliver - Royal Sizing Chart for Details",
    price: 4999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p12",
    title: "Thunder Hollow Lights Trucks",
    description: "Thunder Hollow Lights Skateboard Trucks - Thunder Sizing Chart for Details",
    price: 4999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p13",
    title: "Tensor Alloys Trucks",
    description: "Tensor Alloys Skateboard Trucks - Tensor Sizing Chart for Details",
    price: 3999,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p14",
    title: "Venture Polished Trucks",
    description: "Venture Polished Skateboard Trucks - Venture Sizing Chart for Details",
    price: 4999,
    discontinued: true,
    categories: ["c2"]
  },

  // Category 3 Products
  {
    id: "p15",
    title: "Spitfire Classic Wheels",
    description:
      "Spitfire Formula Four Classic Skateboard Wheels - Afterburn Black/Red Swirl (99d) 53mm",
    price: 3499,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p16",
    title: "Spitfire Conial Wheels",
    description: "Spitfire Formula Four Conical Skateboard Wheels - White (99d) 52mm",
    price: 3499,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p17",
    title: "OJ From Concentrate Hardline Wheels",
    description: "OJ From Concentrate Hardline Skateboard Wheels - white/orange/orange (101a) 53mm",
    price: 2499,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p18",
    title: "OJ Hot Juice Cruiser Wheels ",
    description: "OJ Hot Juice Cruiser Skateboard Wheels  - Orange (78a) 60mm",
    price: 3499,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "p19",
    title: "Bones Reds Bearings",
    description: "Bones Reds Skateboard Bearings - Red",
    price: 1699,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p20",
    title: "Spitfire Cheapshots Bearings ",
    description: "Spitfire Cheapshots Skateboard Bearings  - Black",
    price: 999,
    discontinued: false,
    categories: ["c3"]
  },

  // Category 3 Products
  {
    id: "p21",
    title: "Thrive Philips Hardware",
    description: "Our Standard Phillips Skateboard Hardware - Black (7/8in)",
    price: 199,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p22",
    title: "Enjoi Colorful Philips Hardware ",
    description: "Enjoi Anodized Colorful Little Buddies Skateboard Hardware - Multi (7/8in, 1in)",
    price: 499,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p23",
    title: "Bones Phillips Hardware",
    description: "Standard Phillips Skateboard Hardware - Black/White (7/8in, 1in)",
    price: 249,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p24",
    title: "Pig Allen Hardware",
    description: "Pig Bolts Allen Skateboard Hardware - Black (7/8in, 1in)",
    price: 199,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "p25",
    title: "Grizzly Bear Cut-Out Grip Tape",
    description: "Grizzly's Bear Cut-Out Perforated Skateboard Grip Tape - Black",
    price: 799,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p26",
    title: "MOB GRIP Grip Tape",
    description: "MOB GRIP Perforated Skateboard Grip Tape - Black",
    price: 499,
    discontinued: false,
    categories: ["c4"]
  }
];
