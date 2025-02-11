import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";


const UserOverview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Fetch the user's orders
        const ordersResponse = await axiosSecure.get(`/orders?email=${user?.email}`);
        setOrders(ordersResponse.data);

        // Fetch the user's cart items
        const cartsResponse = await axiosSecure.get(`/carts?email=${user?.email}`);
        setCarts(cartsResponse.data);
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to load dashboard data.");
        console.error(error);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user, axiosSecure]);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      
      {loading ? (
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
            {carts.length > 0 ? (
              <div className="space-y-4">
                {carts.map((cartItem) => (
                  <div key={cartItem._id} className="flex justify-between items-center">
                    <span>{cartItem.productName}</span>
                    <span>{cartItem.quantity} x ${cartItem.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-4">
                  <strong>Total: </strong>
                  <span>
                    ${carts.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
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
