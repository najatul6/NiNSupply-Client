import OrderCard from "@/components/RootView/MyCart/OrderCard";
import useCart from "@/hooks/useCart";

const MyCart = () => {
  const { cart, isLoading, refetch } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
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
              <OrderCard key={product.id} product={product} refetch={refetch} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
