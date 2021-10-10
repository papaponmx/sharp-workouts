-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "darkMode" BOOLEAN,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting.id_unique" ON "Setting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Setting.userId_unique" ON "Setting"("userId");
