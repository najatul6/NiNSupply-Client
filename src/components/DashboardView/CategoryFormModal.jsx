import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const CategoryFormModal = ({ isOpen, onClose, category, refetch }) => {
  const [formData, setFormData] = useState({
    id: "",
    packageName: "",
    category: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (category) {
      setFormData(category);
    } else {
      setFormData({ id: "", packageName: "", category: "", thumbnail: "" });
    }
  }, [category]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category) {
      await fetch(`/api/categories/${category._id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
    } else {
      await fetch("/api/categories", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    }
    refetch();
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-gray-900 p-6 rounded-lg text-white w-96">
          <h2 className="text-lg font-semibold mb-4">
            {category ? "Edit Category" : "Add Category"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="ID"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="packageName"
              value={formData.packageName}
              onChange={handleChange}
              placeholder="Package Name"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="Thumbnail URL"
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="bg-gray-600 px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
                {category ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

CategoryFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.object,
  refetch: PropTypes.func.isRequired,
};

export default CategoryFormModal;
