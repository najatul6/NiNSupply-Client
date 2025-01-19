import { useQuery } from "@tanstack/react-query";
import OrderCard from "@/components/RootView/MyCart/OrderCard";

// Function to get cart from localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Custom hook to use cart data
const useCart = () => {
  const { data: cart = [], isLoading, isError } = useQuery({
    queryKey: ["cart"], // Cart data query key
    queryFn: getCartFromLocalStorage, // Fetch from localStorage
    staleTime: Infinity, // No need to refetch since it's localStorage data
  });

  return { cart, isLoading, isError };
};

const MyCart = () => {
  const { cart, isLoading, isError } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching cart data</div>;
  }

  return (
    <div>
      <div className="grid gap-6 py-4 overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 gap-6">
          {cart.length === 0 ? (
            <div className="text-center text-lg text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            cart.map((product) => (
              <OrderCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
