import { usersTable } from "~/db/schema.server";
import type { Route } from "./+types/home";
import { db } from "~/db/drizzle.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router v7 Demo Vercel" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const users = await db.select().from(usersTable);

  return {
    users,
    message: context.VALUE_FROM_VERCEL,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
    </div>
  );
}
