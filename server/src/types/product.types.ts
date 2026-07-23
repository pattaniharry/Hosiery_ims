export interface ProductSearchItem {
    variantId: number;
    sku: string;
    productName: string;
    color: string | null;
    size: string | null;
    currentStock: number;
    sellingPrice: number | null;
}

export interface ProductSearchResponse {
    items: ProductSearchItem[];
}