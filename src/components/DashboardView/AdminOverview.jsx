import useAllUser from "@/hooks/useAllUser";
import {
  PackagePlus,
  Store,
  Truck,
  Users,
  Wallet,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminOverview = () => {
  const [allUser] = useAllUser();
  return (
    <div>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Revenue */}
        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-green-600">
                <Wallet />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">
                Total Revenue
              </h2>
              <p className="font-bold text-3xl text-green-500">$3249 </p>
            </div>
          </div>
        </div>
        {/* Total Users */}
        <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
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
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-yellow-600">
                <WalletCards />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Unpaid</h2>
              <p className="font-bold text-3xl text-yellow-600">20</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-blue-600">
                <Truck />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Orders</h2>
              <p className="font-bold text-3xl">152 days</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-indigo-600">
                <PackagePlus />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">New Orders</h2>
              <p className="font-bold text-3xl">7 tasks</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-red-600">
                <Store />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Products</h2>
              <p className="font-bold text-3xl text-red-500">3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminOverview;
