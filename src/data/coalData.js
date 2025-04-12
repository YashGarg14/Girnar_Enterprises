const coalData = [
  {
    id: "usa-steam-coal",
    name: "USA Steam Coal",
    //   image: "/images/usa_steam_coal.jpg",
    imageGallery: [
      "/images/usa_steam_coal.jpg",
      "/images/usa_steam_coal1.jpg",
    ],
    pricePerTonne: "₹11900",
    minOrderQuantity: "42 tonnes",
    description: "High-quality steam coal sourced from USA mines.",
    specifications: {
      grade: "A",
      gcv: "7000+",
      usage: "Power Generation/Boilers/Furnaces/Kilns",
      packaging: "Loose",
      size: "0-50mm",
      color: "Black",
      purity: "95%",
      moisture: "7%",
      fixedCarbon: "49%",
      sulphur: "Below 4%",
      form: "Solid",
    },
  },
  {
    id: "indonesian-coal-1",
    name: "Indonesian Coal High CV",
    imageGallery: [
      "/images/indonesian-high-coal.jpg",
      "/images/indonesian-high-coal1.jpg",
    ],
    pricePerTonne: "₹8100",
    minOrderQuantity: "42 tonnes",
    description:
      "Indonesian coal with high calorific value. Prices and specifications may vary vessel-wise, contact for latest information.",
    specifications: {
      grade: "B",
      garValue: "5000+",
      usage: "Boilers",
      packaging: "Loose",
      purity: "90%",
      ash: "5%",
      moisture: "13%",
      sulphur: "0.75%",
      fixedCarbon: "43%",
      form: "Solid",
    },
  },
  {
    id: "indonesian-coal-2",
    name: "Indonesian Coal Medium GCV",
    imageGallery: [
      "/images/indonesian-medium-coal.jpg",
      "/images/indonesian-medium-coal1.jpg",
    ],
    pricePerTonne: "₹7200",
    minOrderQuantity: "42 tonnes",
    description:
      "Medium GCV Indonesian Coal for Boiler application. Prices and specifications may vary vessel-wise, contact for latest information.",
    specifications: {
      grade: "B-",
      garValue: "4200+",
      usage: "Boilers",
      packaging: "Bulk-Loose",
      color: "Black",
      purity: "90%",
      moisture: "18%",
      sulphur: "Below 1%",
      size: "0-50mm",
    },
  },
];

export default coalData;
