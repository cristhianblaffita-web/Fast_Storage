import { useReducer } from "react";
import type { ProductInput } from "../types/products";

export enum ProductsFormReducerActionKinds {
    NAME = 'name',
    DESCRIPTION = 'description',
    PRICE = 'price',
    QUANTITY = 'quantity',
    CLEAR_ALL = 'clear_all'
}

export interface ProductsFormReducerActionType {
    type: ProductsFormReducerActionKinds;
    payload: any
}

const productInitialState: ProductInput = {
    name: '',
    description: '',
    price: 0,
    quantity: 1
}

export function productsFormReducer(state: ProductInput, action: ProductsFormReducerActionType) {
    switch (action.type) {
        case ProductsFormReducerActionKinds.NAME:
            return { ...state, name: action.payload };
        case ProductsFormReducerActionKinds.DESCRIPTION:
            return { ...state, description: action.payload };
        case ProductsFormReducerActionKinds.PRICE:
            return { ...state, price: action.payload };
        case ProductsFormReducerActionKinds.QUANTITY:
            return { ...state, quantity: action.payload };
        case ProductsFormReducerActionKinds.CLEAR_ALL:
            return { ...productInitialState };
        default:
            return { ...state };
    }
}

export function useProductsForm() {
    const [formProduct, dispatch] = useReducer(productsFormReducer, productInitialState);

    return { formProduct, dispatch }
}