import useAllOrders from "@/hooks/useAllOrders";
import useAllUser from "@/hooks/useAllUser";
import useProduct from "@/hooks/useProduct";
import { PackagePlus, Store, Truck, Users, WalletCards } from "lucide-react";
import Chart from "react-google-charts";
import TotalRevenue from "./TotalRevenue";
import PendingRevenue from "./PendingRevenue";

const AdminOverview = () => {
  const [allUser] = useAllUser();
  const [allOrders] = useAllOrders();
  const [products] = useProduct();

  const approvedOrders = allOrders?.filter(
    (order) => order?.status === "approved"
  );
  const pendingOrders = allOrders?.filter(
    (order) => order?.status === "pending"
  );
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const anotherData = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Total Revenue */}
        <TotalRevenue />

        {/* Pending Revenue */}
        <PendingRevenue />

        {/* Orders */}
        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-blue-600">
                <Truck />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Orders</h2>
              <p className="font-bold text-3xl text-blue-600">
                {approvedOrders?.length}
              </p>
            </div>
          </div>
        </div>

        {/* New Orders */}
        <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-indigo-600">
                <PackagePlus />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">New Orders</h2>
              <p className="font-bold text-3xl text-indigo-600">
                {pendingOrders?.length}
              </p>
            </div>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-yellow-600">
                <WalletCards />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Paid</h2>
              <p className="font-bold text-3xl text-yellow-600">20</p>
            </div>
          </div>
        </div>

        {/* Total Users */}
        <div className="bg-gradient-to-b from-pink-300 to-pink-200 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-pink-600">
                <Users />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">
                Total Customers
              </h2>
              <p className="font-bold text-3xl text-pink-500">
                {allUser?.length}
              </p>
            </div>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-gradient-to-b from-orange-200 to-orange-100 border-b-4 border-orange-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-orange-600">
                <Store />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Products</h2>
              <p className="font-bold text-3xl text-orange-600">
                {products?.length}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Chart
            chartType="PieChart"
            data={data}
            options={{
              backgroundColor: "#000000", // Black background for the chart
            }}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={anotherData}
            options={{
              backgroundColor: "#000000", // Black background for the chart
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default AdminOverview;
