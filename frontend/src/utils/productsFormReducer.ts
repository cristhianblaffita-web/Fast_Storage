import type { ProductInput } from "../types/products";
import { ProductsFormReducerActionKinds, type ProductsFormReducerActionType } from "../types/types";

export const productInitialState: ProductInput = {
    name: '',
    description: '',
    price: 0,
    quantity: 1
};

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
        case ProductsFormReducerActionKinds.ALL:
            return { ...action.payload };
        case ProductsFormReducerActionKinds.CLEAR_ALL:
            return { ...productInitialState };
        default:
            return { ...state };
    }
}