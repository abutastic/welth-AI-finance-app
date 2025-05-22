import { PrismaClient } from "@/lib/generated/prisma"; // if output path is custom

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
