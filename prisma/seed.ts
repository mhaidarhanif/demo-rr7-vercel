import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const bear = {
    slug: "bear",
    name: "Bear",
    species: "Bear",
    birthdate: new Date(),
  };

  await prisma.animal.upsert({
    where: { slug: "bear" },
    create: bear,
    update: bear,
  });
}

seed().then(
  () => {
    console.log("✅ Seed complete");
    prisma.$disconnect();
  },
  (e) => {
    console.error(e);
    prisma.$disconnect();
  }
);
