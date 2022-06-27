-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "issuer" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roles" TEXT NOT NULL DEFAULT 'user'
);
INSERT INTO "new_User" ("email", "id", "issuer", "name", "roles") SELECT "email", "id", "issuer", "name", "roles" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_issuer_key" ON "User"("issuer");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
