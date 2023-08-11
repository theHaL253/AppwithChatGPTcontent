// This is for initialize the data client so that we can call the database everytime we want 

import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production"){
    prismaInit = new PrismaClient();
} else {
    // This is to access the prisma property of any global objects or variable (which is not stricted to any data types)
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient();
    }
    prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;