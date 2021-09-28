-- RedefineIndex
DROP INDEX "WorkoutHistory_userId_unique";
CREATE UNIQUE INDEX "WorkoutHistory.userId_unique" ON "WorkoutHistory"("userId");
