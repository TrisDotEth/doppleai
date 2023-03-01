-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "manualPost" BOOLEAN NOT NULL,
    "usedAsPost" BOOLEAN NOT NULL,
    "whenWillPost" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("body", "createdAt", "id", "manualPost", "usedAsPost", "user", "whenWillPost") SELECT "body", "createdAt", "id", "manualPost", "usedAsPost", "user", "whenWillPost" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
