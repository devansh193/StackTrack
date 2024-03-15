/*
  Warnings:

  - You are about to drop the column `usernmae` on the `User` table. All the data in the column will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "usernmae",
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "role" DROP NOT NULL;
