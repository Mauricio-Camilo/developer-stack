-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);
