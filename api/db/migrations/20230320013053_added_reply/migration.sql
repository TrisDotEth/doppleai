-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "reply" TEXT,
ALTER COLUMN "manualPost" SET DEFAULT false;
