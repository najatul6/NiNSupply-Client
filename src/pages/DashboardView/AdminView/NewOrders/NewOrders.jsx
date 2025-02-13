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
import { Edit, Eye, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Dialog, DialogContent, DialogHeader } from "@radix-ui/react-dialog";

const NewOrders = () => {
  const [allOrders,refetch] = useAllOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
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

    const handleView = (order) => {
      setSelectedOrder(order);
      Swal.fire({
        title: `Order Details - ${order._id}`,
        html: `<div style='text-align:left'>
          <p><strong>Customer:</strong> ${order.fullName}</p>
          <p><strong>Email:</strong> ${order.userEmail}</p>
          <p><strong>Total Price:</strong> $${order.totalPrice.toFixed(2)}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</p>
          <p><strong>Items:</strong></p>
          <ul>${order.cartItems
            .map((item) => `<li>${item.productName} - ${item.quantity}</li>`)
            .join("")}</ul>
        </div>`,
        confirmButtonText: "Close",
      });
    };
  
    const handleStatusUpdate = async (order) => {
      const { value: newStatus } = await Swal.fire({
        title: "Update Order Status",
        input: "select",
        inputOptions: {
          Pending: "Pending",
          Processing: "Processing",
          Completed: "Completed",
        },
        inputValue: order.status,
        showCancelButton: true,
      });
      
      if (newStatus && newStatus !== order.status) {
        // Update status logic here (e.g., API call)
        console.log(`Updating status of ${order._id} to ${newStatus}`);
        refetch(); // Refresh orders after update
        Swal.fire("Updated!", "Order status has been updated.", "success");
      }
    };

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
                  <TableCell className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleView(order)}>
                      <Eye size={16} />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleStatusUpdate(order)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-red-600">
                      <Trash2 size={16} />
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
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="bg-gray-900 text-white">
            <DialogHeader>
              <h2 className="text-lg font-semibold">Order Details</h2>
            </DialogHeader>
            <div className="mt-4">
              <p><strong>Customer:</strong> {selectedOrder.fullName}</p>
              <p><strong>Email:</strong> {selectedOrder.userEmail}</p>
              <p><strong>Total Price:</strong> ${selectedOrder.totalPrice.toFixed(2)}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Order Date:</strong> {new Date(selectedOrder.orderDate).toLocaleDateString()}</p>
              <h3 className="mt-4 font-semibold">Items:</h3>
              <ul className="list-disc ml-4">
                {selectedOrder.cartItems.map((item) => (
                  <li key={item._id}>
                    {item.productName} - {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => setSelectedOrder(null)}
              className="mt-4 w-full bg-blue-500"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};



export default NewOrders;
