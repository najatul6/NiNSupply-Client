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
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

const NewOrders = () => {
  const [allOrders] = useAllOrders();
  const newOrder =
    allOrders?.filter((order) => order?.status === "Pending") || [];
  const [search, setSearch] = useState("");

  // Filter orders based on search input
  const filteredOrders =
    newOrder?.filter((order) => {
      const customerName = order.fullName ? order.fullName.toLowerCase() : "";
      const orderId = order._id ? order._id.toString() : "";
      const userEmailId = order.userEmail ? order.userEmail.toLowerCase() : "";
      return (
        customerName.includes(search.toLowerCase()) ||
        orderId.includes(search) ||
        userEmailId.includes(search.toLowerCase())
      );
    }) || [];

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Orders Pending Management</h2>

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
      <div className="overflow-x-auto border rounded-lg shadow-lg">
        <Table className="w-full border-collapse">
          <TableHeader className="border-b bg-gray-500 text-white">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-baseColor border-r">Items</TableHead>
              <TableHead className="text-baseColor border-r">Customer Name</TableHead>
              <TableHead className="text-baseColor border-r">Total ($)</TableHead>
              <TableHead className="text-baseColor border-r">Status</TableHead>
              <TableHead className="text-baseColor border-r">Date</TableHead>
              <TableHead className="text-baseColor w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow
                  key={order._id}
                  className="border-b hover:bg-gray-600 transition-all"
                >
                  <TableCell className="py-3 px-4 border-r">
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
                  </TableCell>
                  <TableCell className="py-3 px-4 border-r">{order?.fullName}</TableCell>
                  <TableCell className="py-3 px-4 border-r">
                    ${order.totalPrice ? order.totalPrice.toFixed(2) : "0.00"}
                  </TableCell>
                  <TableCell className="py-3 px-4 border-r">
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
                  <TableCell className="py-3 px-4 border-r">
                    {order.orderDate
                      ? new Date(order.orderDate).toLocaleDateString()
                      : "N/A"}
                  </TableCell>
                  <TableCell className="py-3 px-4 flex justify-center items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 rounded-lg py-2 text-sm hover:bg-red-600"
                    >
                     <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan="6"
                  className="text-center text-gray-500 py-4"
                >
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
