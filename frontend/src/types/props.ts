import type { ProductInput, ProductOutput } from "./products";
import type { AddProductType, ProductsFormDispatchType, ProductsFormReducerActionType } from "./types";

export interface ProductsFormProps {
    addProductFunc: AddProductType,
    product: ProductInput,
    dispatch: React.ActionDispatch<[action: ProductsFormReducerActionType]>
}


export interface EditProductProps {
    formDispatch: ProductsFormDispatchType, 
    product: ProductOutput
}