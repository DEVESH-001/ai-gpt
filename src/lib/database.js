// import { PrismaClient } from "../prisma/generated/client";
// import { PrismaNeon } from "@prisma/adapter-neon";

// const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
// export const prismaDB = new PrismaClient({ adapter });

// v5
import { PrismaClient } from "@prisma/client";

const prismaDB =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = prismaDB;
}

export default prismaDB;
