export const items = [
  {
    id: 1,
    img: "../../public/assets/Decoration/buda1.webp",
    tittle: "Buda 1",
    category: "Decoration",
    price: 10,
  },
  {
    id: 2,
    img: "../../public/assets/Decoration/buda2.jpg",
    tittle: "Buda 2",
    category: "Decoration",
    price: 10,
  },
  {
    id: 3,
    img: "../../public/assets/Decoration/globo.jpg",
    tittle: "Balloom",
    category: "Decoration",
    price: 10,
  },
  {
    id: 4,
    img: "../../public/assets/Jarrones/jarronCircular.jpg",
    tittle: "Rounded Vase",
    category: "vases",
    price: 10,
  },
  {
    id: 5,
    img: "../../public/assets/Jarrones/jarronNegro.jpg",
    tittle: "Black Vase",
    category: "Vases",
    price: 10,
  },
  {
    id: 6,
    img: "../../public/assets/Jarrones/jarronRaro2.jpg",
    tittle: "Natural Vase",
    category: "vases",
    price: 10,
  },

  {
    id: 7,
    img: "../../public/assets/Macetas/jarronYplanta.jpg",
    tittle: "Gardener Flower Pot",
    category: "Pots",
    price: 10,
  },
  {
    id: 8,
    img: "../../public/assets/Macetas/maceta1.jpg",
    tittle: "Centerpiece Pot",
    category: "Pots",
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
