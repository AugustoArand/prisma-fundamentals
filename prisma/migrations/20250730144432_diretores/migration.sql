/*
  Warnings:

  - Added the required column `diretorId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "diretorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Diretor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Diretor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_diretorId_fkey" FOREIGN KEY ("diretorId") REFERENCES "Diretor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
