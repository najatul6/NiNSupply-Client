import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAllOrders from "@/hooks/useAllOrders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const NewOrders = () => {
  const [allOrders] = useAllOrders();
  const newOrder = allOrders?.filter((order) => order?.status === "Pending") || [];
  const [search, setSearch] = useState("");

  // Filter orders based on search input
  const filteredOrders =
    newOrder?.filter((order) => {
      const customerName = order.customer ? order.customer.toLowerCase() : "";
      const orderId = order._id ? order._id.toString() : "";
      return customerName.includes(search.toLowerCase()) || orderId.includes(search);
    }) || [];

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Orders Management</h2>

      {/* Search Bar */}
      <div className="flex justify-end items-center mb-4">
        <Input
          type="text"
          placeholder="Search by order ID or customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3 border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg">
        <Table className="w-full border-collapse">
          <TableHeader className="border-b">
            <TableRow>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[120px]">
                Order ID
              </TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[150px]">
                Customer
              </TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[120px]">
                Total ($)
              </TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[120px]">
                Status
              </TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[150px]">
                Date
              </TableHead>
              <TableHead className="py-3 px-4 text-left font-semibold min-w-[120px]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id} className="border-b hover:bg-gray-50 transition-all">
                  <TableCell className="py-3 px-4">{order.id}</TableCell>
                  <TableCell className="py-3 px-4">{order.customer}</TableCell>
                  <TableCell className="py-3 px-4">${order.total ? order.total.toFixed(2) : "0.00"}</TableCell>
                  <TableCell className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded text-white text-sm font-medium ${
                        order.status === "Pending"
                          ? "bg-yellow-500"
                          : order.status === "Processing"
                          ? "bg-blue-500"
                          : "bg-green-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="6" className="text-center text-gray-500 py-4">
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
