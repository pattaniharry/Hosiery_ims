export interface InventoryItem {
    id: number;
    sku: string;
    product: string;
    color: string | null;
    size: string | null;
    purchasePrice: number | null;
    sellingPrice: number | null;
    stock: number;
}

export interface InventoryResponse {
    items: InventoryItem[];
    pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
    };
}