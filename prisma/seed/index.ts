import { User } from "@prisma/client";
import prisma from "../../clients/prisma";

async function main() {
  const users = await seedUsers();
  const posts = await seedPosts(users);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedUsers() {
  const allCommands = [
    { email: "elsa@prisma.io", name: "Elsa Prisma" },
    { name: "Bob", email: "bob@prisma.io" },
    { name: "Bobo", email: "bob@prisma.io" }, // Duplicate unique key!
    { name: "Yewande", email: "yewande@prisma.io" },
    { name: "Angelique", email: "angelique@prisma.io" },
  ].map((user) =>
    prisma.user.upsert({
      where: {
        email: user.email,
      },
      create: user,
      update: user,
    }),
  );
  return Promise.all(allCommands);
}

async function seedPosts(users: User[]) {
  const userId: number = users[0]?.id || -1;
  return prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is post content",
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
