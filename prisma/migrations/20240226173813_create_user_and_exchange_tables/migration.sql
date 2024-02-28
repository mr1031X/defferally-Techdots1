-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('QI', 'WEALTH_MANAGER', 'REAL_ESTATE_BROKER', 'INVESTOR', 'LAWYER', 'CPA', 'OTHER');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('RELINQUISHED_PROPERTY', 'REPLACEMENT_PROPERTY');

-- CreateEnum
CREATE TYPE "ExchangeStatus" AS ENUM ('ACTIVE', 'COMPLETED');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('RELINQUISHED_PROPERTY_SALE_AGREEMENT', 'EXCHANGE_AGREEMENT', 'TITLE_DEED_DOCUMENTS', 'CLOSING_STATEMENT', 'NOTICE_OF_INTENT');

-- CreateEnum
CREATE TYPE "PartyType" AS ENUM ('EXCHANGER', 'QUALIFIED_INTERMEDIARY', 'BUYER', 'SELLER', 'CLOSING_AGENT', 'LENDER', 'ATTORNEY', 'ACCOUNTANT', 'ESCROW_AGENT');

-- CreateEnum
CREATE TYPE "StepType" AS ENUM ('CONTRACT_EXCHANGE_DOCUMENTS', 'SETTLEMENT_OF_RELINQUISHED_PROPERTY', 'ID_PERIOD_45_DAY', 'CONTRACT_ON_REPLACEMENT_PROPERTY', 'SETTLEMENT_ON_REPLACEMENT_PROPERTY', 'REPORTING_EXCHANGE_TO_IRS');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'OTHER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exchange" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL,
    "stepNumber" INTEGER NOT NULL,
    "status" "ExchangeStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Exchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "exchangeId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "PartyType" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "exchangeId" INTEGER NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "type" "StepType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "isEnabled" BOOLEAN NOT NULL,
    "exchangeId" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_uuid_key" ON "User"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Exchange_uuid_key" ON "Exchange"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Document_uuid_key" ON "Document"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Party_uuid_key" ON "Party"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Step_uuid_key" ON "Step"("uuid");

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_exchangeId_fkey" FOREIGN KEY ("exchangeId") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_exchangeId_fkey" FOREIGN KEY ("exchangeId") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_exchangeId_fkey" FOREIGN KEY ("exchangeId") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
