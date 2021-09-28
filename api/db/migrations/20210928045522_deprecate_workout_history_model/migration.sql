/*
  Warnings:

  - You are about to drop the `WorkoutHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `workoutHistoryId` on the `WorkoutDay` table. All the data in the column will be lost.
  - Added the required column `userId` to the `WorkoutDay` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "WorkoutHistory.userId_unique";

-- DropIndex
DROP INDEX "WorkoutHistory.id_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WorkoutHistory";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutDay" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutDay" ("id") SELECT "id" FROM "WorkoutDay";
DROP TABLE "WorkoutDay";
ALTER TABLE "new_WorkoutDay" RENAME TO "WorkoutDay";
CREATE UNIQUE INDEX "WorkoutDay.id_unique" ON "WorkoutDay"("id");
CREATE UNIQUE INDEX "WorkoutDay.userId_unique" ON "WorkoutDay"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
