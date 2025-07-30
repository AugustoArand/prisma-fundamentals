/*
  Warnings:

  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "clientes";

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "releaseDate" DATE NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "detailId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieDetail" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "director" VARCHAR(100) NOT NULL,
    "duration" INTEGER NOT NULL,
    "genre" VARCHAR(50) NOT NULL,
    "language" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "MovieDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_detailId_key" ON "Movie"("detailId");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_detailId_fkey" FOREIGN KEY ("detailId") REFERENCES "MovieDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
