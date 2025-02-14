import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useProduct from "@/hooks/useProduct";
import { toast } from "react-toastify";

const ProductsControl = () => {
  const [products, isLoading, refetch] = useProduct();
  const axiosSecure = useAxiosSecure();
  const [deleting, setDeleting] = useState(null);

  // Handle Delete Product
  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
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
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Products Control</h2>

      {isLoading ? (
        <p className="text-center text-gray-400">Loading products...</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Thumbnail</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img src={product.thumbnail} alt={product.productName} className="w-12 h-12 rounded" />
                  </TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>{product.discount}%</TableCell>
                  <TableCell>
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
