/*
  Warnings:

  - Added the required column `whenWillPost` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "manualPost" BOOLEAN NOT NULL,
    "usedAsPost" BOOLEAN NOT NULL,
    "whenWillPost" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("body", "createdAt", "id", "manualPost", "usedAsPost", "user") SELECT "body", "createdAt", "id", "manualPost", "usedAsPost", "user" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
