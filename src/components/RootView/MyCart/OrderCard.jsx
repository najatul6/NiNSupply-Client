import { RiDeleteBin2Fill } from "react-icons/ri";
import { useState } from "react";

// Function to update cart in localStorage
const updateCartInLocalStorage = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const OrderCard = ({ product, refetch }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  // Handle quantity change
  const handleIncrement = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    updateCart(product.id, updatedQuantity);
    refetch();  // Refetch cart after updating
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      updateCart(product.id, updatedQuantity);
      refetch();  // Refetch cart after updating
    }
  };

  // Remove product from cart
  const handleRemove = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter(item => item.id !== product.id);
    updateCartInLocalStorage(updatedCart);
    refetch();  // Refetch cart after removal
  };

  // Update cart data in localStorage
  const updateCart = (id, updatedQuantity) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.map(item => 
      item.id === id ? { ...item, quantity: updatedQuantity } : item
    );
    updateCartInLocalStorage(updatedCart);
  };

  return (
    <div className="border p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">{product.productName}</h1>
        </div>
        <div>
          <p className="text-lg font-bold">{product.price}৳</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div>
          <button
            className="bg-baseColor text-white px-4 py-1 rounded-md"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            className="bg-baseColor text-white px-4 py-1 rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={handleRemove}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
