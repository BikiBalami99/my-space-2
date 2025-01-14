const posts = [
  {
    title: "The Adventures of Space Cat",
    slug: "adventures-space-cat",
    content: "Join Space Cat as he explores the galaxy, one paw at a time!",
  },
  {
    title: "Galactic Donut Hunt",
    slug: "galactic-donut-hunt",
    content: "A thrilling quest to find the universe's most delicious donuts.",
  },
  {
    title: "Alien Dance Party",
    slug: "alien-dance-party",
    content: "Get ready to groove with aliens from all corners of the cosmos.",
  },
  {
    title: "Rocket Science for Dummies",
    slug: "rocket-science-dummies",
    content:
      "An easy guide to building your own rocket and reaching the stars.",
  },
  {
    title: "The Mystery of the Black Hole",
    slug: "mystery-black-hole",
    content: "Unravel the secrets hidden within the darkest corners of space.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
