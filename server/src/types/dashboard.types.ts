export interface StatCardData {
  totalSku: number;
  totalStock: number;
  lowStock: number;
  outStock: number;
}

export interface RecentTransactionData {
  id: number;
  productName: string;
  sku: string;
  transactionType: string;
  quantity: number;
  employeeName: string;
  createdAt: string;
}

export interface LowStockProductData {
  id: number;
  sku: string;
  itemName: string;
  currentStock: number;
  minStock: number;
}

export interface DashboardData {
  stats: StatCardData;
  recentTransactions: RecentTransactionData[];
  lowStockProducts: LowStockProductData[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
