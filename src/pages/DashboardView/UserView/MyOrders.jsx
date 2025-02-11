import useOrders from "@/hooks/useOrders";

const MyOrders = () => {
  const [orders, , isLoading] = useOrders();
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp); // No need for Number() conversion
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
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-md rounded-lg border border-white">
            <thead>
              <tr className="bg-baseColor text-gray-700">
                <th className="py-3 px-4 text-left border-r border-black">
                  Items
                </th>
                <th className="py-3 px-4 text-left border-r border-black">
                  Total Price
                </th>
                <th className="py-3 px-4 text-left border-r border-black">
                  Status
                </th>
                <th className="py-3 px-4 text-left border-r border-black ">
                  Date
                </th>
                <th className="py-3 px-4 text-left ">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order?._id} className="border-b hover:bg-gray-500">
                  <td className="py-3 px-4 border border-white text-wrap text-xs">
                    {order.cartItems.map((item) => {
                      return (
                        <ul key={item._id} className="list-disc pl-1">
                          <li>
                            {item?.productName}{" "}
                            <span className="italic"> - </span>
                            {item?.quantity}
                          </li>
                        </ul>
                      );
                    })}
                  </td>
                  <td className="py-3 px-4 border border-white text-wrap">
                    $ {order?.totalPrice || 0}
                  </td>
                  <td className="py-3 px-4 border border-white text-indigo-600 font-semibold">
                    {order?.status}
                  </td>
                  <td className="py-3 px-4 text-wrap border border-white">
                    {formatDate(order?.orderDate)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {order.status === "Pending" ? "Unpaid" : "Paid"}
                  </td>
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
