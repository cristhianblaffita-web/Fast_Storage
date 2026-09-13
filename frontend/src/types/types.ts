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

export type ProductsFormDispatchType = React.ActionDispatch<[action: ProductsFormReducerActionType]>;

export interface ProductsFormContextType {
    formProduct: ProductInput;
    dispatch: ProductsFormDispatchType;
    editProduct: (product: ProductInput) => void;
    clearForm: () => void;
}

export enum ProductsFormReducerActionKinds {
    NAME = 'name',
    DESCRIPTION = 'description',
    PRICE = 'price',
    QUANTITY = 'quantity',
    ALL = 'all',
    CLEAR_ALL = 'clear_all'
}

export interface ProductsFormReducerActionType {
    type: ProductsFormReducerActionKinds;
    payload: any
}