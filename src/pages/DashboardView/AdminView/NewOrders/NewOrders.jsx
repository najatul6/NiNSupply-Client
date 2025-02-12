import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using a UI library like ShadCN
import { Input } from "@/components/ui/input";
import useAllOrders from "@/hooks/useAllOrders";

const NewOrders = () => {
  const [allOrders] = useAllOrders(); 
  const newOrder=allOrders?.filter((order) => order?.status === "Pending") || [];
  const [search, setSearch] = useState("");

  // Filter orders based on search input
  const filteredOrders = newOrder.filter(order =>
    order.customer.toLowerCase().includes(search.toLowerCase()) ||
    order.id.toString().includes(search)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Orders Management</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4 gap-3">
        <Input
          type="text"
          placeholder="Search by order ID or customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Total ($)</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        order.status === "Pending" ? "bg-yellow-500" :
                        order.status === "Processing" ? "bg-blue-500" :
                        "bg-green-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="6" className="text-center text-gray-500">
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NewOrders;
