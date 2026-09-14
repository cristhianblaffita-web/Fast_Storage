import { EditIcon, TrashIcon } from "lucide-react";
import type { ProductsListProps } from "../../types/props";

export default function ProductsList({
  productsResponse,
  totalProducts,
  handleDeleteProduct,
  handleEditProduct
}: ProductsListProps) {


  return (
    <div className="w-full min-w-200 relative grid grid-cols-1 gap-3 bg-surface p-4 rounded-2xl shadow-2xl">
      <div className="w-full h-8 absolute top-[calc(0%-16px)] rounded-t-lg bg-gray-200">
        <span className="absolute right-0 bg-surface rounded-[8px_8px_0_0] p-2">
          <strong>Total:</strong> {totalProducts}
        </span>
      </div>

      <h2 className="text-lg font-bold text-start pt-4">Products List</h2>

      <table className="w-full grid grid-cols-1 gap-2 ">
        <thead className="w-full font-bold ">
          <tr className="grid grid-cols-[50px_repeat(5,1fr)] gap-2">
            {productsResponse?.column_names.map((col) => (
              <td key={col}>{col.toUpperCase()}</td>
            ))}
            <td>ACTIONS</td>
          </tr>
        </thead>
        <tbody className="max-h-80 bg-gray-300 rounded-md overflow-y-auto">
          {productsResponse?.data && productsResponse.data.length > 0 ? productsResponse.data.map((prod, idx) => (
            <tr
              className="grid grid-cols-[50px_repeat(5,1fr)] gap-2"
              key={idx}
            >
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 1}><strong>{prod.id}</strong></td>
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 2}>{prod.name}</td>
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 3}>{prod.description}</td>
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 4}>{prod.price}</td>
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 5}>{prod.quantity}</td>
              <td className="p-2 text-nowrap text-ellipsis line-clamp-1 hover:text-clip hover:overflow-auto" key={idx * 10 + 6}>
                <div className="flex flex-row justify-center gap-2">
                  <button
                    className="bg-secondary text-surface p-1 rounded-md cursor-pointer active:scale-90 transition-transform"
                    onClick={() => handleEditProduct(prod)}
                    title="Edit product"
                  >
                    <EditIcon/>
                  </button>

                  <button
                    className="bg-warning text-surface p-1 rounded-md cursor-pointer active:scale-90 transition-transform"
                    onClick={() => handleDeleteProduct(prod.id)}
                    title="Delete product"
                  >
                    <TrashIcon/>
                  </button>

                </div>
              </td>
            </tr>
          )) : <tr className="flex justify-center"><td className="w-full p-4 text-center text-gray-700">No products found</td></tr>}
        </tbody>
      </table>
    </div>
  )
}