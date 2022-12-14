export const items = [
  {
    id: 2,
    img: "../assets/Decoration/buda2.jpg",
    tittle: "Buda 2",
    category: "decoration",
    price: 34,
  },
  {
    id: 3,
    img: "../assets/Decoration/globo.jpg",
    tittle: "Balloom",
    category: "decoration",
    price: 10,
  },
  {
    id: 4,
    img: "../assets/Jarrones/jarronCircular.jpg",
    tittle: "Rounded Vase",
    category: "vase",
    price: 10,
  },
  {
    id: 5,
    img: "../assets/Jarrones/jarronNegro.jpg",
    tittle: "Black Vase",
    category: "vase",
    price: 10,
  },
  {
    id: 6,
    img: "../assets/Jarrones/jarronRaro2.jpg",
    tittle: "Natural Vase",
    category: "vase",
    price: 10,
  },

  {
    id: 7,
    img: "../assets/Macetas/jarronYplanta.jpg",
    tittle: "Gardener Flower Pot",
    category: "pots",
    price: 10,
  },
  {
    id: 8,
    img: "../assets/Macetas/maceta1.jpg",
    tittle: "Centerpiece Pot",
    category: "pots",
    price: 10,
  },
];

export const TotalItems = items.length;

export const Items = items.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category] = [...acc[item.category], item];

  return acc;
}, {});
