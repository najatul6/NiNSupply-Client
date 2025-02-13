import { useState } from "react";
import useCategory from "@/hooks/useCategory";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import CategoryFormModal from "@/components/DashboardView/CategoryFormModal";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const CategoriesControl = () => {
  const [categories, isLoading, refetch] = useCategory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const handleAdd = () => {
    setEditCategory(null);
    setIsModalOpen(true);
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`/api/categories/${id}`, { method: "DELETE" });
        if (response.ok) {
          toast.success("Category deleted successfully!");
          refetch();
        } else {
          toast.error("Failed to delete category.");
        }
      } catch (error) {
        toast.error("An error occurred.");
      }
    }
  };

  return (
    <div className="p-6  text-white rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Button onClick={handleAdd} className="flex items-center gap-2">
          <AiOutlinePlus /> Add Category
        </Button>
      </div>

      {isLoading ? (
        <p className="text-white">Loading categories...</p>
      ) : (
        <Table className="border rounded-xl">
          <TableHeader className="bg-gray-500 text-white">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-baseColor border-r">Package Name</TableHead>
              <TableHead className="text-baseColor border-r">Category</TableHead>
              <TableHead className="text-baseColor border-r">Total Product</TableHead>
              <TableHead className="text-baseColor border-r w-36">Thumbnail</TableHead>
              <TableHead className="text-baseColor w-5">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category._id}>
                <TableCell className="border-r">{category.packageName}</TableCell>
                <TableCell className="border-r">{category.category}</TableCell>
                <TableCell className="border-r">{category.id}</TableCell>
                <TableCell className="border-r h-28">
                  <img src={category.thumbnail} alt={category.packageName} className="w-full h-full object-cover rounded" />
                </TableCell>
                <TableCell className="flex gap-2 justify-center items-center h-28">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(category)}>
                    <AiOutlineEdit className="text-yellow-400" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleDelete(category._id)}>
                    <AiOutlineDelete className="text-red-500" size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {isModalOpen && (
        <CategoryFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          category={editCategory}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default CategoriesControl;
