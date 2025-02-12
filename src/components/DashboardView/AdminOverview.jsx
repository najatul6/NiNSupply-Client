import TotalRevenue from "./TotalRevenue";
import PendingRevenue from "./PendingRevenue";
import ProcessingRevenue from "./ProcessingRevenue";
import CompletedRevenue from "./CompletedRevenue";
import TotalProducts from "./TotalProducts";
import TotalOrders from "./TotalOrders";
import NewOrders from "./NewOrders";
import TotalCustomer from "./TotalCustomer";
import TotalSales from "./TotalSales";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";

const AdminOverview = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Total Revenue */}
        <TotalRevenue />

        {/* Pending Revenue */}
        <PendingRevenue />

        {/* Processing Revenue */}
        <ProcessingRevenue />

        {/* Completed Revenue */}
        <CompletedRevenue />

        {/* Orders */}
        <TotalOrders />

        {/* New Orders */}
        <NewOrders />

        {/* Total Sales */}
        <TotalSales />

        {/* Total Customers */}
        <TotalCustomer />

        {/* Total Products */}
        <TotalProducts />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-[400px] flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <PieChart />
        </div>
        <div className="h-[400px] flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
          <ColumnChart />
        </div>
      </section>
    </div>
  );
};

export default AdminOverview;
