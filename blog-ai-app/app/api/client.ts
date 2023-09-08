// This is for initialize the data client so that we can call the database every time we want 

import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

// process.env.NODE_ENV is a environment variable for node js in which we can set it to production, development, testing
if (process.env.NODE_ENV === "production"){
    prismaInit = new PrismaClient();
} else {
    // This is to access the prisma property of any global objects or variable (which is not strict to any data types)
    if (!(global as any).prisma) {
        (global as any).prisma = new PrismaClient();
    }
    prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;