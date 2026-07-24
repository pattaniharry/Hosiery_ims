/*
  Warnings:

  - A unique constraint covering the columns `[brand_code]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[colour_code]` on the table `colours` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[brand_id,sequence]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size_code]` on the table `sizes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "brand_code" VARCHAR(5);

-- AlterTable
ALTER TABLE "colours" ADD COLUMN     "colour_code" VARCHAR(5);

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "sequence" INTEGER;

-- AlterTable
ALTER TABLE "sizes" ADD COLUMN     "size_code" VARCHAR(5);

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_code_key" ON "brands"("brand_code");

-- CreateIndex
CREATE UNIQUE INDEX "colours_colour_code_key" ON "colours"("colour_code");

-- CreateIndex
CREATE UNIQUE INDEX "products_brand_id_sequence_key" ON "products"("brand_id", "sequence");

-- CreateIndex
CREATE UNIQUE INDEX "sizes_size_code_key" ON "sizes"("size_code");
