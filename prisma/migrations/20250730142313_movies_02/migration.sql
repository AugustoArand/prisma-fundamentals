/*
  Warnings:

  - You are about to drop the column `movieId` on the `MovieDetail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_detailId_fkey";

-- AlterTable
ALTER TABLE "MovieDetail" DROP COLUMN "movieId";

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "MovieDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
