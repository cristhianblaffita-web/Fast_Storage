import type { ProductOutput } from "./products";

export interface ApiProductsResponse {
    data: ProductOutput[],
    column_names: string[]
}