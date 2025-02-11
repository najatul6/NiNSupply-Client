import useAuth from "@/hooks/useAuth";
import useCarts from "@/hooks/useCart";
import useOrders from "@/hooks/useOrders";


const UserOverview = () => {
  const { user } = useAuth();
  const [orders, ,isLoading] =useOrders()
  const [cart] = useCarts

  

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="space-y-6">
          {/* User Info Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name}!</h2>
            <p className="text-sm">Email: {user?.email}</p>
            <p className="text-sm">Member since: {new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((cartItem) => (
                  <div key={cartItem._id} className="flex justify-between items-center">
                    <span>{cartItem.productName}</span>
                    <span>{cartItem.quantity} x ${cartItem.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4">
                  <strong>Total: </strong>
                  <span>
                    ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
                  </span>
                </div>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* Recent Orders Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order._id} className="flex justify-between items-center">
                    <span>Order #{order._id.slice(0, 8)}</span>
                    <span>{order.status}</span>
                    <span>
                      ${order.cartItems.reduce(
                        (total, item) => total + item.quantity * item.price,
                        0
                      ).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have no orders yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOverview;
