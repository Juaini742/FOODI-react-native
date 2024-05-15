import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    name: "Hamburger",
  },
  {
    name: "Snake",
  },
  {
    name: "Noodles",
  },
  {
    name: "Meat",
  },
  {
    name: "Vegetable",
  },
  {
    name: "Cake",
  },
  {
    name: "Ice Cream",
  },
  {
    name: "Drink",
  },
];

const products = [
  {
    name: "Hamburger Classic",
    price: 5.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Burger King",
  },
  {
    name: "Cheese Hamburger",
    price: 6.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "McDonald's",
  },
  {
    name: "Deluxe Hamburger",
    price: 7.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Burger World",
  },
  {
    name: "Bacon Hamburger",
    price: 8.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Grill Master",
  },
  {
    name: "Snake Snack",
    price: 3.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Snake Shack",
  },
  {
    name: "Spicy Snake",
    price: 4.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Exotic Bites",
  },
  {
    name: "Herbal Snake",
    price: 4.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Nature's Bite",
  },
  {
    name: "Roasted Snake",
    price: 5.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Exotic Flavors",
  },
  {
    name: "Chicken Noodles",
    price: 7.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Noodle House",
  },
  {
    name: "Beef Noodles",
    price: 8.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Noodle Corner",
  },
  {
    name: "Seafood Noodles",
    price: 9.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Ocean's Delight",
  },
  {
    name: "Vegetable Noodles",
    price: 7.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Healthy Noodles",
  },
  {
    name: "Grilled Meat",
    price: 9.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Meat Lovers",
  },
  {
    name: "BBQ Meat",
    price: 10.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Barbecue Nation",
  },
  {
    name: "Pepper Steak",
    price: 12.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Steakhouse",
  },
  {
    name: "Smoked Ribs",
    price: 14.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Rib Shack",
  },
  {
    name: "Mixed Vegetable",
    price: 4.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Veggie Delight",
  },
  {
    name: "Grilled Vegetable",
    price: 5.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Green Eats",
  },
  {
    name: "Steamed Broccoli",
    price: 4.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Green Garden",
  },
  {
    name: "Stuffed Peppers",
    price: 5.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Veggie Palace",
  },
  {
    name: "Chocolate Cake",
    price: 6.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Sweet Treats",
  },
  {
    name: "Vanilla Cake",
    price: 6.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Cake Delight",
  },
  {
    name: "Red Velvet Cake",
    price: 7.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Cake Factory",
  },
  {
    name: "Carrot Cake",
    price: 6.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Bakers' Delight",
  },
  {
    name: "Strawberry Ice Cream",
    price: 3.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Cool Cones",
  },
  {
    name: "Mint Ice Cream",
    price: 4.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Frozen Treats",
  },
  {
    name: "Blueberry Ice Cream",
    price: 4.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Ice Cream Heaven",
  },
  {
    name: "Chocolate Ice Cream",
    price: 3.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Ice Cream Hub",
  },
  {
    name: "Orange Juice",
    price: 2.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Juice Bar",
  },
  {
    name: "Lemonade",
    price: 2.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Refreshments",
  },
  {
    name: "Pineapple Smoothie",
    price: 3.49,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Smoothie King",
  },
  {
    name: "Mango Juice",
    price: 2.99,
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
    store: "Juice Corner",
  },
];

async function main() {
  for (const category of categories) {
    const categoryData = await prisma.category.create({
      data: category,
    });
    const categoryProducts = products.splice(0, 4).map((product) => ({
      ...product,
      category_id: categoryData.id,
    }));

    for (const product of categoryProducts) {
      await prisma.product.create({
        data: product,
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
