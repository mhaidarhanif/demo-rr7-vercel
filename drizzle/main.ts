import "dotenv/config";
import { eq } from "drizzle-orm";
import { usersTable } from "../app/db/schema.server";
import { db } from "../app/db/drizzle.server";

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  const users = await db.select().from(usersTable);
  console.log({ users });

  const updatedUser = await db
    .update(usersTable)
    .set({ age: 100 })
    .where(eq(usersTable.email, user.email));
  console.log({ updatedUser });
}

main();
