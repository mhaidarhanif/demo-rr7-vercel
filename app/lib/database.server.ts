import { remember } from "@epic-web/remember";

import { PrismaClient } from "@prisma/client/index.js";

export * from "@prisma/client/index.js";

export const prisma = remember(
  "prisma",
  () =>
    new PrismaClient({
      log: [{ emit: "stdout", level: "query" }],
    })
);
