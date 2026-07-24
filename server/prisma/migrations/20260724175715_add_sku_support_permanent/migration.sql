/*
  Warnings:

  - Made the column `brand_code` on table `brands` required. This step will fail if there are existing NULL values in that column.
  - Made the column `colour_code` on table `colours` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sequence` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size_code` on table `sizes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "brands" ALTER COLUMN "brand_code" SET NOT NULL;

-- AlterTable
ALTER TABLE "colours" ALTER COLUMN "colour_code" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "sequence" SET NOT NULL;

-- AlterTable
ALTER TABLE "sizes" ALTER COLUMN "size_code" SET NOT NULL;
