import useOrders from "@/hooks/useOrders";

const MyOrders = () => {
  const [orders, , isLoading] = useOrders();
console.log(orders);
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(Number(timestamp)); // Ensure timestamp is a number
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? ( // Fixed empty orders check
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Total Items</th>
                <th className="py-3 px-4 text-left">Total Price</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-100">
                  {/* <td className="py-3 px-4">{order._id}</td>
                  <td className="py-3 px-4">{order.items.length}</td>
                  <td className="py-3 px-4">${order.totalPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-indigo-600 font-semibold">
                    {order.status}
                  </td>
                  <td className="py-3 px-4">{formatDate(order.createdAt)}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
