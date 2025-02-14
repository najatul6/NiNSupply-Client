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
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const ProductsControl = () => {
  const [products, isLoading, refetch] = useProduct();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Handle Delete Product with SweetAlert
  const handleDelete = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/products/${productId}`);
          if (res.data.deletedCount > 0) {
            toast.success("Product deleted successfully!");
            refetch();
          }
        } catch (error) {
          console.error("Error deleting product:", error);
          toast.error("Failed to delete product!");
        }
      }
    });
  };

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 rounded-lg shadow-lg text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Products Control</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AiOutlinePlus /> Add Product
        </Button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 mb-4 border rounded-lg text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
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
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="8" className="text-center text-gray-400">
                    No products found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductsControl;
