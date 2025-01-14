import type { Route } from "./+types/home";
import { prisma } from "~/lib/database";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router v7 Demo Vercel" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const animals = await prisma.animal.findMany();

  return {
    animals,
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
