import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAllOrders from "@/hooks/useAllOrders";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ProcessingOrders = () => {
  const [allOrders] = useAllOrders();
  const totalOrder =
    allOrders?.filter(
      (order) => order?.status && order.status === "Processing"
    ) || [];
  const [search, setSearch] = useState("");
  // Filter orders based on search input
  const filteredOrders =
    totalOrder?.filter((order) => {
      const customerName = order.customer ? order.customer.toLowerCase() : "";
      const orderId = order._id ? order._id.toString() : "";
      return (
        customerName.includes(search.toLowerCase()) || orderId.includes(search)
      );
    }) || [];

  return (
    <div className="p-6 w-full">
      {/* Helmet for title and meta tags Start here */}
      <Helmet>
        <title>Processing Orders | NiN Supply</title>
        <meta
          name="description"
          content="Track and manage processing orders on NiN Supply to ensure timely fulfillment."
        />
        <meta
          name="keywords"
          content="processing orders, order management, order tracking, ecommerce, NiN Supply, pending fulfillment"
        />
        <meta name="author" content="NiN Supply" />

        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Processing Orders | NiN Supply" />
        <meta
          property="og:description"
          content="Track and manage processing orders on NiN Supply to ensure timely fulfillment."
        />
        <meta
          property="og:image"
          content="https://nin-supply.vercel.app/processing-orders-og.jpg"
        />
        <meta
          property="og:url"
          content="https://nin-supply.vercel.app/processing-orders"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better previews on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Processing Orders | NiN Supply" />
        <meta
          name="twitter:description"
          content="Track and manage processing orders on NiN Supply to ensure timely fulfillment."
        />
        <meta
          name="twitter:image"
          content="https://nin-supply.vercel.app/twitter-processing-orders.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://nin-supply.vercel.app/processing-orders"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://nin-supply.vercel.app/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>

      {/* Helmet for title and meta tags End here */}

      <h2 className="text-2xl font-semibold mb-6">
        Orders Processing Management
      </h2>

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
              <TableHead className="text-baseColor">Order ID</TableHead>
              <TableHead className="text-baseColor">Customer</TableHead>
              <TableHead className="text-baseColor">Total ($)</TableHead>
              <TableHead className="text-baseColor">Status</TableHead>
              <TableHead className="text-baseColor">Date</TableHead>
              <TableHead className="text-baseColor">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow
                  key={order.id}
                  className="border-b hover:bg-gray-600 transition-all"
                >
                  <TableCell className="py-3 px-4">{order.id}</TableCell>
                  <TableCell className="py-3 px-4">{order.customer}</TableCell>
                  <TableCell className="py-3 px-4">
                    ${order.total ? order.total.toFixed(2) : "0.00"}
                  </TableCell>
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
                    {order.date
                      ? new Date(order.date).toLocaleDateString()
                      : "N/A"}
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

export default ProcessingOrders;
