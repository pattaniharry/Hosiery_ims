import prisma from "../utils/db.js";
import type { InventoryResponse } from "../types/inventory.types.js";

export async function getInventoryData(params: {
  page?: number;
  pageSize?: number;
}): Promise<InventoryResponse> {
  const page = Math.max(Number(params.page) || 1, 1);
  const pageSize = Math.min(Math.max(Number(params.pageSize) || 20, 1), 100);
  const skip = (page - 1) * pageSize;

  const totalItems = await prisma.product_variants.count();

  if (totalItems === 0) {
    return {
      items: [],
      pagination: {
        page: 1,
        pageSize,
        totalItems: 0,
        totalPages: 0,
      },
    };
  }

  const variants = await prisma.product_variants.findMany({
    skip,
    take: pageSize,
    orderBy: {
      sku: "asc",
    },
    select: {
      id: true,
      sku: true,
      purchase_price: true,
      selling_price: true,
      colour: {
        select: {
          name: true,
        },
      },
      size: {
        select: {
          name: true,
        },
      },
      inventory: {
        select: {
          quantity: true,
        },
      },
      product: {
        select: {
          product_name: true,
        },
      },
    },
  });

  const items = variants.map((item) => ({
    id: item.id,
    sku: item.sku,
    product: item.product.product_name,
    color: item.colour?.name ?? null,
    size: item.size?.name ?? null,
    purchasePrice: item.purchase_price ? Number(item.purchase_price) : null,
    sellingPrice: item.selling_price ? Number(item.selling_price) : null,
    stock: item.inventory?.quantity ?? 0,
  }));

  return {
    items,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
    },
  };
}
