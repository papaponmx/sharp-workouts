/*
  Warnings:

  - The primary key for the `WorkoutHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkoutDay` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutHistory" ("id", "userId") SELECT "id", "userId" FROM "WorkoutHistory";
DROP TABLE "WorkoutHistory";
ALTER TABLE "new_WorkoutHistory" RENAME TO "WorkoutHistory";
CREATE UNIQUE INDEX "WorkoutHistory.id_unique" ON "WorkoutHistory"("id");
CREATE UNIQUE INDEX "WorkoutHistory_userId_unique" ON "WorkoutHistory"("userId");
CREATE TABLE "new_WorkoutDay" (
    "id" TEXT NOT NULL,
    "workoutHistoryId" TEXT,
    FOREIGN KEY ("workoutHistoryId") REFERENCES "WorkoutHistory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutDay" ("id", "workoutHistoryId") SELECT "id", "workoutHistoryId" FROM "WorkoutDay";
DROP TABLE "WorkoutDay";
ALTER TABLE "new_WorkoutDay" RENAME TO "WorkoutDay";
CREATE UNIQUE INDEX "WorkoutDay.id_unique" ON "WorkoutDay"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
