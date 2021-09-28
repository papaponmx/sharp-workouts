-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "didWorkout" BOOLEAN NOT NULL,
    "userId" TEXT,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutDay" ("didWorkout", "id", "userId") SELECT "didWorkout", "id", "userId" FROM "WorkoutDay";
DROP TABLE "WorkoutDay";
ALTER TABLE "new_WorkoutDay" RENAME TO "WorkoutDay";
CREATE UNIQUE INDEX "WorkoutDay.id_unique" ON "WorkoutDay"("id");
CREATE UNIQUE INDEX "WorkoutDay.userId_unique" ON "WorkoutDay"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
