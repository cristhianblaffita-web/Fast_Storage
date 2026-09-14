import type { ApiProductsResponse } from "./api";
import type { ProductInput, ProductOutput } from "./products";
import type { AddProductType, ProductsFormDispatchType, ProductsFormReducerActionType } from "./types";

export interface ProductsFormProps {
    addProductFunc: AddProductType,
    clearFormFunc: () => void,
    product: ProductInput,
    dispatch: React.ActionDispatch<[action: ProductsFormReducerActionType]>
}

export interface ProductsListProps {
    productsResponse: ApiProductsResponse | null,
    totalProducts: number,
    handleDeleteProduct: (productId: number) => Promise<void>,
    handleEditProduct: (product: ProductInput) => void
  }

export interface EditProductProps {
    formDispatch: ProductsFormDispatchType, 
    product: ProductOutput
}