import type { ApiProductsResponse } from "../types/api";

export interface ProductContextType {
    isLoading: boolean;
    error: unknown | null;
    getProducts: () => Promise<void>;
    productsResponse: ApiProductsResponse;
    totalProducts: number;
}