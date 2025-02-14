import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
} from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useProduct from "@/hooks/useProduct";
import { toast } from "react-toastify";

const ProductsControl = () => {
  const [products, isLoading, refetch] = useProduct();
  const axiosSecure = useAxiosSecure();
  const [deleting, setDeleting] = useState(null);

  // Handle Delete Product
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    setDeleting(productId);
    try {
      const res = await axiosSecure.delete(`/products/${productId}`);
      if (res.data.deletedCount > 0) {
        toast.success("Product deleted successfully!");
        refetch();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product!");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Products Control</h2>

      {isLoading ? (
        <p className="text-center text-gray-400">Loading products...</p>
      ) : (
        <div className="overflow-x-auto">
          <Table className="border rounded-xl">
            <TableHeader className="bg-gray-500 text-white">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-baseColor border-r">#</TableHead>
                <TableHead className="text-baseColor border-r">
                  Thumbnail
                </TableHead>
                <TableHead className="text-baseColor border-r">
                  Product Name
                </TableHead>
                <TableHead className="text-baseColor border-r">
                  Category
                </TableHead>
                <TableHead className="text-baseColor border-r">Stock</TableHead>
                <TableHead className="text-baseColor border-r">Price</TableHead>
                <TableHead className="text-baseColor border-r">
                  Discount
                </TableHead>
                <TableHead className="text-baseColor">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product._id}>
                  <TableCell className="text-baseColor border-r">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    <img
                      src={product.thumbnail}
                      alt={product.productName}
                      className="w-12 h-12 rounded"
                    />
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    {product.productName}
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    {product.category}
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    {product.stock}
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    ${product.price}
                  </TableCell>
                  <TableCell className="text-baseColor border-r">
                    {product.discount}%
                  </TableCell>
                  <TableCell className="text-baseColor ">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={deleting === product._id}
                      onClick={() => handleDelete(product._id)}
                    >
                      {deleting === product._id ? "Deleting..." : "Delete"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductsControl;
