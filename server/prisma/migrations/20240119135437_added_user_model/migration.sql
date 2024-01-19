-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL
);
