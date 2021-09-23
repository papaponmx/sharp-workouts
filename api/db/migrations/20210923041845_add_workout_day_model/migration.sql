-- CreateTable
CREATE TABLE "WorkoutDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutHistoryId" INTEGER,
    FOREIGN KEY ("workoutHistoryId") REFERENCES "WorkoutHistory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
