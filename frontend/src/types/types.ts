import type { ApiProductsResponse } from "../types/api";
import type { ProductInput } from "./products";

export type AddProductType = (product: ProductInput) => Promise<void>


export interface ProductContextType {
    isLoading: boolean;
    error: unknown | null;
    getProducts: () => Promise<void>;
    productsResponse: ApiProductsResponse | null;
    totalProducts: number;
    handleDeleteProduct: (productId: number) => Promise<void>
    handleAddProduct: AddProductType
}

