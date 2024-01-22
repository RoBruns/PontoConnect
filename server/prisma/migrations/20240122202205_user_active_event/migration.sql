-- CreateTable
CREATE TABLE "PlanType" (
    "type_id" TEXT NOT NULL,
    "type_name" TEXT NOT NULL,

    CONSTRAINT "PlanType_pkey" PRIMARY KEY ("type_id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "plan_id" TEXT NOT NULL,
    "plan_name" TEXT NOT NULL,
    "plan_price" DOUBLE PRECISION NOT NULL,
    "plan_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type_id" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "Statement" (
    "sta_id" TEXT NOT NULL,
    "sta_amount" DOUBLE PRECISION NOT NULL,
    "sta_date" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Statement_pkey" PRIMARY KEY ("sta_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_login" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_active" BOOLEAN NOT NULL,
    "user_created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plan_id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanType_type_name_key" ON "PlanType"("type_name");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_plan_name_key" ON "Plan"("plan_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_login_key" ON "User"("user_login");

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "PlanType"("type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Statement" ADD CONSTRAINT "Statement_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;
