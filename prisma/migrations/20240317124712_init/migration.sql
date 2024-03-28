-- CreateTable
CREATE TABLE "TeacherDetail" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "mobileNo" INTEGER NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDetail_id_key" ON "TeacherDetail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherDetail_email_key" ON "TeacherDetail"("email");
