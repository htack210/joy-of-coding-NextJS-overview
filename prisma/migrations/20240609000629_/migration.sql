/*
  Warnings:

  - You are about to drop the column `emailAcct` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_emailAcct_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `emailAcct`,
    ADD COLUMN `email` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
