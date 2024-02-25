-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('QI', 'WEALTH_MANAGER', 'REAL_ESTATE_BROKER', 'INVESTOR', 'LAWYER', 'CPA', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'OTHER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
