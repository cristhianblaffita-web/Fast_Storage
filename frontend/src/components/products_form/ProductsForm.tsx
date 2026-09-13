import { ProductsFormReducerActionKinds, useProductsForm } from "../../hooks/useProductsForm";
import type { AddProductType } from "../../types/types";

export default function ProductForm({
    addProductFunc,
}: {
    addProductFunc: AddProductType;
}) {
    const { formProduct, dispatch } = useProductsForm();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addProductFunc(formProduct);
        dispatch({type: ProductsFormReducerActionKinds.CLEAR_ALL, payload: null});
    }

    return (
        <div className="w-full min-w-200 relative grid grid-cols-1 gap-3 bg-surface p-4 rounded-2xl shadow-2xl">
            <h2 className="text-lg font-bold text-start">Products Form</h2>
            <form
                className="flex flex-row flex-wrap gap-3"
                method="post"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    className="bg-gray-300 w-36 p-2 rounded-md outline-primary"
                    value={formProduct.name}
                    onChange={(e) =>
                        dispatch({
                            type: ProductsFormReducerActionKinds.NAME,
                            payload: e.target.value,
                        })
                    }
                    name="name"
                    type="text"
                    placeholder="Name"
                    minLength={2}
                    maxLength={30}
                    required
                />
                <input
                    className="bg-gray-300 w-36 p-2 rounded-md outline-main"
                    value={formProduct.description}
                    onChange={(e) =>
                        dispatch({
                            type: ProductsFormReducerActionKinds.DESCRIPTION,
                            payload: e.target.value,
                        })
                    }
                    name="description"
                    type="text"
                    placeholder="Description"
                    maxLength={80}
                />
                <input
                    className="bg-gray-300 w-36 p-2 rounded-md outline-main"
                    value={formProduct.price}
                    onChange={(e) =>
                        dispatch({
                            type: ProductsFormReducerActionKinds.PRICE,
                            payload: e.target.value,
                        })
                    }
                    name="price"
                    type="number"
                    placeholder="Price"
                    min={0}
                    max={999999999}
                    required
                />
                <input
                    className="bg-gray-300 w-36 p-2 rounded-md outline-main"
                    value={formProduct.quantity}
                    onChange={(e) =>
                        dispatch({
                            type: ProductsFormReducerActionKinds.QUANTITY,
                            payload: e.target.value,
                        })
                    }
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    min={1}
                    max={999999999}
                    required
                />
                <input
                    className="bg-primary w-24 text-surface p-2 rounded-md cursor-pointer active:scale-90 transition-transform"
                    type="submit"
                    value="Add product"
                />
            </form>
        </div>
    );
}
