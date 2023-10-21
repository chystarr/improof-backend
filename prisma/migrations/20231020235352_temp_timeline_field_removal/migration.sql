/*
  Warnings:

  - You are about to drop the column `userId` on the `Timeline` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Timeline" DROP CONSTRAINT "Timeline_userId_fkey";

-- AlterTable
ALTER TABLE "Timeline" DROP COLUMN "userId";
