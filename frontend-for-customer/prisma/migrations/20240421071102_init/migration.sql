-- CreateTable
CREATE TABLE "UserPrivateData" (
    "id" TEXT NOT NULL,
    "LastName" TEXT,
    "FirstName" TEXT,
    "Address" TEXT,
    "PhoneNumber" INTEGER NOT NULL,

    CONSTRAINT "UserPrivateData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPrivateData_PhoneNumber_key" ON "UserPrivateData"("PhoneNumber");
