// development
import * as Prisma from "@prisma/client";

// production
import { default as ProdPrisma } from "@prisma/client";

let { PrismaClient } = Prisma;

if (process.env.NODE_ENV === "production")
  PrismaClient = ProdPrisma.PrismaClient;

export const prisma = new PrismaClient();
