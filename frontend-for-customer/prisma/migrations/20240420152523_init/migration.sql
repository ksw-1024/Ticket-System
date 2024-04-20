-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TikcetData" (
    "id" TEXT NOT NULL,
    "registrationdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "operator" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "limitdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TikcetData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HaveTicketData" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" TEXT NOT NULL,
    "ticketid" TEXT NOT NULL,

    CONSTRAINT "HaveTicketData_pkey" PRIMARY KEY ("id")
);
