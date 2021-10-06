/*
  Warnings:

  - Added the required column `didWorkout` to the `WorkoutDay` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registerDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("email", "id", "name", "registerDate") SELECT "email", "id", "name", "registerDate" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.id_unique" ON "User"("id");
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
CREATE TABLE "new_WorkoutDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "didWorkout" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutDay" ("id", "userId") SELECT "id", "userId" FROM "WorkoutDay";
DROP TABLE "WorkoutDay";
ALTER TABLE "new_WorkoutDay" RENAME TO "WorkoutDay";
CREATE UNIQUE INDEX "WorkoutDay.id_unique" ON "WorkoutDay"("id");
CREATE UNIQUE INDEX "WorkoutDay.userId_unique" ON "WorkoutDay"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
