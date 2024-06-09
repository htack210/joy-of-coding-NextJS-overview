/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailAcct]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    ADD COLUMN `emailAcct` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_emailAcct_key` ON `users`(`emailAcct`);
