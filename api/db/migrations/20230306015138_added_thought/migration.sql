-- CreateTable
CREATE TABLE "Thought" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "usedAsPost" BOOLEAN NOT NULL,
    "reply" TEXT,
    "profileImageUrl" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "whenWillPost" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thought_pkey" PRIMARY KEY ("id")
);
